<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
               
			  $id     = $data->id;     
			  $amount_requested_to_keep     = $data->amount_requested_to_keep;            
        
				$result = $conn->prepare("UPDATE  investment  SET	 
				 amount_requested_to_keep =?
				WHERE id= ?"); 
if($result->execute(array($amount_requested_to_keep,$id))){
	echo 1;
}	

?>


