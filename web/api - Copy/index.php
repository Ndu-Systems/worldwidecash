<?php
  $dbhandler = new PDO('mysql:host=localhost;dbname=worldwidecash','root','');
  $_prepare = $dbhandler->prepare("INSERT INTO chat (senderEmail ,  senderName ,  receiverEmail ,  receiverName  ,  timeSent,  message,clientId, status)
                VALUES (?,?,?,?,?,?,?,?)"); 
				
	$_prepare->execute(array('$senderEmail', '$senderName', '$receiverEmail', '$receiverName',NOW(),'$message','$clientId','unread'));
?>

 <?php
 /*
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->senderEmail) ){  
$senderEmail		= $data->senderEmail;
$senderName		= $data->senderName;
$receiverEmail	=  $data->receiverEmail;
$receiverName	=   $data->receiverName;
$message			=  $data->messageBody;
$clientId			=  $data->clientId;

        $sql = "INSERT INTO chat (senderEmail ,  senderName ,  receiverEmail ,  receiverName  ,  timeSent,  message,clientId, status)
                VALUES ('$senderEmail', '$senderName', '$receiverEmail', '$receiverName',NOW(),'$message','$clientId','unread')";        
        
        if ($conn->query($sql) === TRUE) {
			//SELECT * FROM Table ORDER BY ID DESC LIMIT 1
			// make them read
   $sql = "
				UPDATE  chat  SET	 
				 status = 'unread'
				WHERE  `clientId`='$clientId'";	
								
				if ($conn->query($sql) === TRUE) {
					//echo 1;
				} else {
				//echo 0;
				}						
					
            echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }       
        
 
}
 else {

	echo json_encode( "500");
}*/
?>
