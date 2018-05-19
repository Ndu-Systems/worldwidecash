<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
require "../emailClientApiSide.php";
$data     = json_decode(file_get_contents("php://input"));
$rows     = array();
$response = array();
$result   = $conn->prepare("SELECT * FROM investment WHERE status = ?");
$result->execute(array(
    'paid'
));
if ($result->rowCount() > 0) {
    while ($row = $result->fetch(PDO::FETCH_OBJ)) {
		$investmentID     = $row->id;
		$dream =  $row->dream;
		$userID =  $row->userID;
        $keeperStatusList = array();
        
        // get keepers
        $result = $conn->prepare("SELECT * FROM keeper WHERE investmentID = ?");
        $result->execute(array(
            $investmentID
        ));
        if ($result->rowCount() > 0) {
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {
                $keeperStatusList[] = $row->status;
            }
        }
        // Done to get status for this dream
        $isDreamAllPaid = true;
        foreach ($keeperStatusList as $status) {
            if ($status != 'confirmed') {
                $isDreamAllPaid = false;
            }
        }
        if ($isDreamAllPaid) {
            $mature = $conn->prepare("UPDATE investment SET status=? WHERE id = ?");
            $mature->execute(array(
                'active',
                $investmentID
            ));
			$response[] = $investmentID;
			// Send Email
			// get user
			$name = '';
			$to ='';
			$subject='Dream changed to Active';
			$msg ='Congratulations! your dream '.$dream. ' was changed to active!';
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
    
    
}
echo json_encode($response);
?>