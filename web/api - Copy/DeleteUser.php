<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

              $id     = $data->id; 
			 
		   $sql = "
				DELETE FROM user 
				WHERE id= $id		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				//echo 0;
				}						
						
?>


