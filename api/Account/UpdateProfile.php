<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

              $cell     = $data->cell; 
			  $address  = $data->address;  
			  $idnum    = $data->idnum;
			  $city     = $data->city;               
			  $email     = $data->email;               
			  $isAkeeper     = $data->isAkeeper;               
			  $accountnumber     = $data->accountnumber;               
			  $bankname     = $data->bankname;               
			  $accountType     = $data->accountType;               
			  $branch     = $data->branch;               
                 
           								
			$result = $conn->prepare("
			UPDATE  user  SET	 
				 cell = ?, 
				 address =?,
                 idnum =?,
                 city =?,
				
				 isAkeeper=?,
				 accountnumber=?,
				 bankname=?,
				 accountType=?,
				 branch=?
				WHERE email= ?
			"); 
if($result->execute(array($cell,$address,$idnum,$city,$isAkeeper,$accountnumber,$bankname,$accountType,$branch,$email))){
	echo 1;
}		
						

?>


