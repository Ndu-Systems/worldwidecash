<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));


$userID = $data->userID;
$code  = $data->code;
$mylink  = $data->mylink;
$userLink = $mylink."/get-started?link=".$userID.time();

$result = $conn->prepare("UPDATE  user  SET     
                 isEmailVerified =?,
                 code =?,
				 mylink = ?
                WHERE id= ?");
if ($result->execute(array(
    1,
    $code,
	$userLink,
    $userID
	
))) {
echo json_encode($userLink);
}

?>


 