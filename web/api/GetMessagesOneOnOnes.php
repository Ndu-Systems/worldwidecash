<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$clientId = $data->clientId;

$rows = array();
 $sql = "SELECT * FROM `chat` WHERE  `clientId`='$clientId'";

 //$sql = "SELECT * FROM chat WHERE senderName ='$email' OR receiverEmail ='$email' ";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$rows["data"][]= $row;
	}
}

// make them read
   $sql = "
				UPDATE  chat  SET	 
				 status = 'read'
				WHERE  `clientId`='$clientId'";	
								
				if ($conn->query($sql) === TRUE) {
					//echo 1;
				} else {
				//echo 0;
				}						
						
echo json_encode($rows);
$conn->close();

?>