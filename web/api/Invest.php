 <?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){  
$dateInvested   		=date("Y/m/d");
$amountInvested        =$data->amount;
$status               ="Awaiting allocation";
$email= $data->email;
 $package= $data->peroid;
$dream= $data->dream;
$name= $data->name;
$cell= $data->cell;
 
$result = $conn->prepare("INSERT INTO investment (dateInvested, amountInvested, status,email,package,name,dream,expecedDate,cell)
                VALUES (NOW(), ?, ?, ?, ?,?,?,NOW() + INTERVAL $package*30 DAY, ?)"); 
if($result->execute(array($amountInvested, $status, $email, $package,$name,$dream,$cell))){
	echo 1;
}				
}

 
?>
