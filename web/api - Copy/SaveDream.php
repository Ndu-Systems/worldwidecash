 <?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
$dream   	   =$data->dream;
$amount        =$data->amount;
$peroid        =$data->peroid;
$status        ="Pending";
$email= $data->email;

        $sql = "INSERT INTO dream (dream, amount, peroid, status,datecreated,email)
                VALUES ('$dream', '$amount', '$peroid', '$status', now(),'$email')";        
        
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

 dream: dream,
            amount:amount,
            peroid:peroid,