<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
require "../emailClientApiSide.php";
$data     = json_decode(file_get_contents("php://input"));


$investments   = $conn->prepare("SELECT * FROM investment WHERE status = ?");
$investments->execute(array(
    'allocated'
));
if ($investments->rowCount() > 0) {
    while ($row = $investments->fetch(PDO::FETCH_OBJ)) {

		$investmentID     = $row->id;
        $userID =  $row->userID;
		 $today = date('Y-m-d H:i:s');
		if(strtotime($row->timeAllocated) < strtotime($today)){
			    // get keepers
				$keepers = $conn->prepare("SELECT * FROM keeper WHERE investmentID = ?");
				$keepers->execute(array(
					$investmentID
				));
				if ($keepers->rowCount() > 0) {
					while ($keeper = $keepers->fetch(PDO::FETCH_OBJ)) {
						$witdrawalID = $keeper->witdrawalID;
						$amount = $keeper->amount;
						$keepID = $keeper->id;

						// UPDATE BALANCE
						// 1. GET CURRENT BALANCE
						$stmt = $conn->prepare("SELECT balance FROM withdraw WHERE id=? LIMIT 1"); 
						$stmt->execute(array($witdrawalID)); 
						$balanceRow = $stmt->fetch();
						 $balance = $balanceRow['balance'];
						$newAmount =  $balance+$amount;

						$updateBalance = $conn->prepare("UPDATE withdraw SET balance = ? WHERE id = ?");
						$updateBalance->execute(array(
							$newAmount, 	$witdrawalID
						));
						// SEND EMAIL TO THE KEEPER

						//CHANGE THE STATUS
						$updateKeeper = $conn->prepare("UPDATE keeper SET status = ? WHERE id = ?");
						$updateKeeper->execute(array(
							'cancelled', 	$keepID
						));

						//LOCK USER
						$updateUser = $conn->prepare("UPDATE user SET userstatus = ? WHERE id = ?");
						$updateUser->execute(array(
							'locked', 	$userID
						));
						//SEND MEAIL TELL TO USER HE IS LOCKED 

						//CANCEL THE DREAM 
						$updateDream = $conn->prepare("UPDATE investment SET status = ? WHERE id = ?");
						$updateDream->execute(array(
							'locked', 	$investmentID
						));
					}
				}
		}
    }
}
?>