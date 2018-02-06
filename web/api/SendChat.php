 <?php
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

        $sql = "INSERT INTO chat (senderEmail ,  senderName ,  receiverEmail ,  receiverName  ,  timeSent,  message )
                VALUES ('$senderEmail', '$senderName', '$receiverEmail', '$receiverName',NOW(),'$message')";        
        
        if ($conn->query($sql) === TRUE) {
			//SELECT * FROM Table ORDER BY ID DESC LIMIT 1
            echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }       
        
 
}
 else {

	echo json_encode( "500");
}
?>
