<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

			  $id  = $data->id;
			  $name  = $data->name;    
			  $amount  = $data->amount;    
			  $status  = 'unkept';    
			  $id  = $data->id;       
			  $email  = $data->email;   
			  $userID  = $data->userID;      
			  
				$result = $conn->prepare("UPDATE  investment  SET status =?  WHERE id= ?"); 
				if($result->execute(array('active',$id))){
					echo 1;
				}		
				
				// keptamounts 

				$result = $conn->prepare("INSERT INTO keptamounts ( createdate, name ,  amount ,  status ,  investmentID,email,userID)
                VALUES (NOW(),?,?,?,?,?,?)"); 
if($result->execute(array($name, $amount*0.5, $status,$id,$email,$userID))){
	echo 1;
}	
?>


