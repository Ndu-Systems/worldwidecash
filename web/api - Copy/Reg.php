<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
 $name 		=$data->name;
 $surname 	=$data->surname;
 $email 	=$data->email;
 $password 	=$data->password;
 $code 	=$data->code;
 $parentlink 	=$data->parentlink;
 $mylink 	=$data->baseUrl."?link=".time().$code;
 
 // check if user exits
$check = $conn->query("SELECT * FROM user WHERE email = '$email'");
if ($check->num_rows ==0) {
   
        $sql = "INSERT INTO user (name, surname, email, password, createdate, role,code,isEmailVerified,mylink,parentlink)
                VALUES ('$name', '$surname', '$email','$password', now(),'Client',$code,0,'$mylink','$parentlink')";        
        
        if ($conn->query($sql) === TRUE) {
			//SELECT * FROM Table ORDER BY ID DESC LIMIT 1
            echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }       
	
	
}else{
	
	echo "Your account already exists, please go to login";
}
 
 
 
        
 
}
 else {

	echo json_encode( "500");
}
?>