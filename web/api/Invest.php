 <?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
$dateInvested   		=date("Y/m/d");
$amountInvested        =$data->amount;
$status               ="pending";
$email= $data->email;
 $package= $data->peroid;
$dream= $data->dream;
$name= $data->name;

        $sql = "INSERT INTO investment (dateInvested, amountInvested, status,email,package,name,dream,expecedDate)
                VALUES (NOW(), '$amountInvested', '$status', '$email', '$package','$name','$dream',NOW() + INTERVAL $package*30 DAY)";        
        
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
