<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) ){  
 $name 		=$data->name;
 $user 	=$data->user;
 $amount 	=$data->amount;
 $doc 	=$data->doc;

        $sql = "INSERT INTO transiction (name, date, user, amount, doc)
                VALUES ('$name', now(), '$user','$amount','$doc')";        
        
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