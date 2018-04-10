<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$id     = $data->id;
$name   = $data->name;
$amount = $data->amount;
$status = 'unkept';
$id     = $data->id;
$email  = $data->email;
$userID = $data->userID;


$result = $conn->prepare("UPDATE  investment  SET status =?  WHERE id= ?");
if ($result->execute(array(
    'active',
    $id
))) {
    echo 1;
}

// keptamounts 
if($amount>=1000){
$result = $conn->prepare("INSERT INTO keptamounts ( createdate, name ,  amount ,  status ,  investmentID,email,userID)
                                    VALUES (NOW(),?,?,?,?,?,?)");
if ($result->execute(array(
    $name,
    $amount * 0.5,
    $status,
    $id,
    $email,
    $userID
))) {
    echo 1;
}
}
GiveABonus($conn, $userID,$amount);
//give bonuses 
function GetUserParentForAUser($conn, $userID){
    $result = $conn->prepare("SELECT * FROM user WHERE id=?");
if ($result->execute(array(
  $userID
))) {
    while($row=$result->fetch(PDO::FETCH_OBJ)) {
      return  $parentlink = $row->parentlink;
	}
}
}

function GetMyParent($conn,$parentlink){
    $result = $conn->prepare("SELECT * FROM user WHERE mylink=?");
    if ($result->execute(array(
      $parentlink
    ))) {
        while($row=$result->fetch(PDO::FETCH_OBJ)) {
           return $parentID = $row->id;
        }
    }
}

function GetNumberOfInvestemntsForThisUser($conn, $userID){
    $result = $conn->prepare("SELECT * FROM investment WHERE userID=?");
    if ($result->execute(array(
      $userID
    ))) {
       return  $result->rowCount();
    }
}

function GiveABonus($conn, $userID,$amount){
    $bonusPercentage = 0.1;
    if(GetNumberOfInvestemntsForThisUser($conn,$userID)>1){
        $bonusPercentage = 0.02;
    }
    echo $parentlink = GetUserParentForAUser($conn,$userID);
   echo  $parentID  = GetMyParent($conn,$parentlink);
   echo  $amountToGive = $bonusPercentage*$amount;

    $result = $conn->prepare("INSERT INTO bonus ( createdate, amount, status, fromID, userID)
                                    VALUES (NOW(),?,?,?,?)");
if ($result->execute(array(
    $amountToGive,
    'active',
    $userID,
    $parentID
   
))) {
    echo 'done';
}

}
?>

