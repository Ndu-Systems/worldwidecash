<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
require "../emailClientApiSide.php";
$data     = json_decode(file_get_contents("php://input"));
$rows     = array();
$response = array();
$investments   = $conn->prepare("SELECT * FROM investment WHERE status = ?");
$investments->execute(array(
    'paid'
));
if ($investments->rowCount() > 0) {
    while ($row = $investments->fetch(PDO::FETCH_OBJ)) {
		$investmentID     = $row->id;
		$dream =  $row->dream;
		$userID =  $row->userID;
        $keeperStatusList = array();
        
        // get keepers
        $keepers = $conn->prepare("SELECT * FROM keeper WHERE investmentID = ?");
        $keepers->execute(array(
            $investmentID
        ));
        if ($keepers->rowCount() > 0) {
            while ($row = $keepers->fetch(PDO::FETCH_OBJ)) {
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
			   $userdata = $conn->prepare("SELECT * FROM user WHERE id = ?");
			   $userdata->execute(array(
				$userID
			   ));
			   if ($userdata->rowCount() > 0) {
				   while ($row = $userdata->fetch(PDO::FETCH_OBJ)) {
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