<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data   = json_decode(file_get_contents("php://input"));
$rows   = array();
$response = array();
$result = $conn->prepare("SELECT * FROM investment WHERE status = ?");
$result->execute(array(
  'active'
));
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {

				 $dateInvested = $row->dateInvested;
				 $expecedDate = $row->expecedDate;

				 $dream =  $row->dream;
				 $userID =  $row->userID;

				if((time()) > strtotime($expecedDate)){
					$dreamID = $row->id;
					$mature = $conn->prepare("UPDATE investment SET status=? WHERE id = ?");
					$mature->execute(array(
					'matured',
					$dreamID
					));
					$response[] = $dreamID;

			// Send Email
			// get user
			$name = '';
			$to ='';
			$subject='Dream changed to matured';
			$msg ='Congratulations! your dream '.$dream. ' is matured!, you can login and withdraw it!';
			   $result = $conn->prepare("SELECT * FROM user WHERE id = ?");
			   $result->execute(array(
				$userID
			   ));
			   if ($result->rowCount() > 0) {
				   while ($row = $result->fetch(PDO::FETCH_OBJ)) {
					   $name = $row->name;
					   $to= $row->email;
				   }
			   }
			SendEmail( $to,$subject, $msg,$name);

			//Done Sendin Email
				}
			}
			echo json_encode($response);
		}
?>
