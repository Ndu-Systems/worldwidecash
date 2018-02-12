<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
$parentlink = $data->parentlink;
$email = $data->email;

$rows = array();

//members
if($parentlink==""){
	$parentlink="none";
}
 $sql = "SELECT * FROM user WHERE parentlink = '$parentlink' AND isEmailVerified=1";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="members";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;




//bonus
$sql = "SELECT * FROM bonus WHERE email = '$email' and status ='active'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="bonus";
$amount = 0;
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$amount = $amount +$row["amount"];
	}
}
$counts->value =$amount ;
$rows["data"][]= $counts;

//Pending with draw

 $sql = "SELECT * FROM withdraw WHERE email = '$email' and status ='pending'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="pending";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;
//end objects

echo json_encode($rows);




$conn->close();

?>
  <?php
        class Counts {
            public $key ;
            public $value;
          }
          
        ?>
