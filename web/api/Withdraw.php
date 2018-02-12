 <?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
	$amount= $data->amount;
	$investemntId= $data->investemntId;
	$dream= $data->dream;
	$email= $data->email;
	$name= $data->name;
	$isBonus= $data->isBonus;
	$status="pending";
	$pendingbalance="--";
//`amount`, `package`, `createdate`, `email`, `donneremail`, `status`, `investemntId`, `name`, `balance`, `pendingbalance`

	$sql = "INSERT INTO withdraw (amount  ,  createdate ,  email  ,  status ,  investemntId, name,balance,pendingbalance,dream )
                VALUES ('$amount', NOW(), '$email','$status', $investemntId,'$name','$amount','$pendingbalance','$dream')";        
        
        if ($conn->query($sql) === TRUE) {
			//SELECT * FROM Table ORDER BY ID DESC LIMIT 1
           // echo 1;
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }       
        // update investment
		 $sql = "
				UPDATE  investment  SET	 
                 status ='pending-withdrawal'
				WHERE id= $investemntId 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					//echo 1;
				} else {
				//echo 0;
				}	
				
				// update bonus
				if($isBonus){
						 $sql = "
				UPDATE  bonus  SET	 
                 status ='pending-withdrawal'
				WHERE email= '$email' 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				//echo 0;
				}
				}
 
}
 else {

	echo json_encode( "500");
}
?>
