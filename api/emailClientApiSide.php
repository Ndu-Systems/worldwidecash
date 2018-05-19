<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));

function SendEmail ( $to,$subject, $msg,$name){
    $to = $to.",mrnnmthembu@gmail.com";

    $emailFrom = 'noreply@funderslife.com';
    $message = "
    <p>
    Hello ".$name.", <br><br>"
    
    .$msg."<br><br>
    
    Regards<br>
    <h3>Funders<font color='green'>Life</font></h3>
    
    </p>
    ";
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= "From: <".$emailFrom.">" . "\r\n";
    
    mail($to,$subject,$message,$headers);
}
       
?>