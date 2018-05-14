<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));


$userID = $data->userID;
$code  = $data->code;

$result = $conn->prepare("UPDATE  user  SET     
                 isEmailVerified =?,
                 code =?
                WHERE id= ?");
if ($result->execute(array(
    1,
    $code,
    $userID
))) {
echo 1;
}

?>


 