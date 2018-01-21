<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

              $cell     = $data->cell; 
			  $address  = $data->address;  
			  $idnum    = $data->idnum;
			  $country  = $data->country;  
			  $city     = $data->city;               
			  $email     = $data->email;               
                 
           
		   $sql = "
				UPDATE  user  SET	 
				 cell = '$cell', 
				 address ='$address',
                 idnum ='$idnum',
                 country ='$country',
                 city ='$city'
				WHERE email= '$email' 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				//echo 0;
				}						
						

?>


