<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data       = json_decode(file_get_contents("php://input"));
$parentlink = $data->parentlink;
$email      = $data->email;

$rows = array();

//members
if ($parentlink == "") {
    $parentlink = "none";
}
$sql            = "SELECT * FROM user WHERE parentlink = '$parentlink' AND isEmailVerified=1";
$result         = $conn->query($sql);
$counts         = new Counts();
$counts->key    = "members";
$counts->value  = $result->num_rows;
$rows["data"][] = $counts;




//bonus
$sql         = "SELECT * FROM bonus WHERE email = '$email' and status ='active'";
$result      = $conn->query($sql);
$counts      = new Counts();
$counts->key = "bonus";
$amount      = 0;
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $amount = $amount + $row["amount"];
    }
}
$counts->value  = $amount;
$rows["data"][] = $counts;

//Pending with draw

$sql            = "SELECT * FROM withdraw WHERE email = '$email' and status ='pending'";
$result         = $conn->query($sql);
$counts         = new Counts();
$counts->key    = "pending";
$counts->value  = $result->num_rows;
$rows["data"][] = $counts;

//PENING INVESTMENTS

$sql            = "SELECT * FROM investment WHERE  email='$email' AND status IN ('Awaiting allocation','paid', 'allocated')";
$result         = $conn->query($sql);
$counts         = new Counts();
$counts->key    = "pending_investment";
$counts->value  = $result->num_rows;
$rows["data"][] = $counts;

//PENING INVESTMENTS

$sql           = "SELECT * FROM investment WHERE  email='$email' AND status ='allocated'";
$result        = $conn->query($sql);
$counts        = new Counts();
$counts->key   = "allocated";
$timeallocated = "";
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $timeallocated = $row["timeallocated"];
    }
    $counts->value = $timeallocated;
}
$rows["data"][] = $counts;
//get amount to keep

$sql            = "SELECT * FROM investment WHERE  email='$email' AND amountkeepable <> ''";
$result         = $conn->query($sql);
$keepableAmount = 0;
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
      $keepableAmount = $keepableAmount + $row["amountkeepable"];
  }
}
$counts         = new Counts();
$counts->key    = "keepableAmount";
$counts->value  = $keepableAmount;
$rows["data"][] = $counts;
//get amount kept

$sql            = "SELECT * FROM investment WHERE  email='$email' AND amountkept <> ''";
$result         = $conn->query($sql);
$amountkept = 0;
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
      $amountkept = $amountkept + $row["amountkept"];
  }
}
$counts         = new Counts();
$counts->key    = "amountkept";
$counts->value  = $amountkept;
$rows["data"][] = $counts;
//end objects

echo json_encode($rows);




$conn->close();

?>
 <?php
class Counts
{
    public $key;
    public $value;
}

?>
 