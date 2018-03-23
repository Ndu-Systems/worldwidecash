<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));


$email = $data->email;
$code  = $data->code;
$link  = "";


$sql = "
                UPDATE  user  SET     
                 isEmailVerified =1,
                 code = $code
                WHERE email= '$email'         
                ";

$result = $conn->prepare("UPDATE  user  SET     
                 isEmailVerified =?,
                 code =?
                WHERE email= ?");
if ($result->execute(array(
    1,
    $code,
    $email
))) {
    $sql    = "SELECT * FROM user WHERE email='$email'";
    $result = $conn->query($sql);
    
    $result = $conn->prepare("SELECT * FROM user WHERE email=?");
    $result->execute(array(
        $email
    ));
    if ($result->rowCount() > 0) {
        while ($row = $result->fetch(PDO::FETCH_OBJ)) {
            $link = $row->mylink;
        }
        echo $link;
    }
    
}

?>


 