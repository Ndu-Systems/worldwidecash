<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

                   
			  $email     = $data->email;              
			  $code     = $data->code;              
			           
                 
           
		   $sql = "
				UPDATE  user  SET	 
                 isEmailVerified =1,
				 code = $code
				WHERE email= '$email' 		
				";								
				$link="";				
				if ($conn->query($sql) === TRUE) {
					 $sql = "SELECT * FROM user WHERE email='$email'";
						$result = $conn->query($sql);
						if ($result->num_rows > 0) {
							while($row = $result->fetch_assoc()) {
								$link = $row['mylink'];
							}
							echo $link;
						}
				} else {
				//echo 0;
				}						
						
?>


