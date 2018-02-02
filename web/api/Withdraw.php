 <?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
	$amount= $data->amount;
	$dateInvested= $data->dateInvested;
	$investemntId= $data->investemntId;
	$amountInvested= $data->amountInvested;
	$email= $data->email;
	$package= $data->package;
	$name= $data->name;
	$status="pending";

	$sql = "INSERT INTO withdraw (amount ,  package ,  createdate ,  email ,  donneremail ,  status ,  investemntId, name )
                VALUES ('$amount', $package , NOW(), '$email','','$status', $investemntId,'$name')";        
        
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
