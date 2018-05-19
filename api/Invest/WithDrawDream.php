<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->investmentID) ){  
$amount        =$data->amount;
$status        =$data->status;
$investmentID        =$data->investmentID;
$balance        =$data->balance;
$notes        =$data->notes;

$result = $conn->prepare("INSERT INTO withdraw (amount ,  createdate ,  status ,  investmentID  ,  balance ,  notes )
VALUES (?,NOW(),?,?,?,?)"); 
if($result->execute(array($amount, $status,$investmentID,$balance,$notes))){
        echo 1;
}


$result = $conn->prepare("UPDATE  investment  SET	 
status =?
WHERE id= ?"); 
if($result->execute(array('withdrawn',$investmentID))){
echo 1;
}			
}
 
?>
