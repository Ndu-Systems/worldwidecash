<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data      = json_decode(file_get_contents("php://input"));
$id        = $data->id;
$amount    = $data->amount;
$fromEmail = $data->email;
$status = "Active";
$nameFrom = "";
// 1. verify payment!
$sql       = "
                UPDATE  investment  SET     
                 status = 'active'
                WHERE id= $id         
                ";
if ($conn->query($sql) === TRUE) {
}
// 2. Give a bonus!
$sql    = "SELECT * FROM investment ";
$email = GetEmail($conn,$fromEmail);
$result = $conn->query($sql);
if ($result->num_rows == 1) {
    // give a 10% bonus
    GiveBonus($conn, $email, $amount * 0.1, $fromEmail, $status);
} else {
    // give a 2% bonus
    GiveBonus($conn, $email, $amount * 0.02, $fromEmail, $status);
}
function GiveBonus($conn, $email, $amount, $fromEmail, $status)
{
	$nameFrom = GetNameFrom($conn,$fromEmail);
    $sql = "INSERT INTO bonus (email, amount, fromEmail, status,nameFrom)
                VALUES ('$email', '$amount', '$fromEmail','$status','$nameFrom')";
    if ($conn->query($sql) === TRUE) {
        echo 1;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
function GetEmail($conn,$fromEmail)
{
	$parentlink ="none"; 
	$useremailToGiveABonus ="none"; 
    //1. select parent link from users where email = fromEmail
    $sql    = "SELECT * FROM user WHERE email= '$fromEmail'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $parentlink = $row["parentlink"];
        }
    }
    //2. select email  from users where my link = parent link
	 $sql    = "SELECT * FROM user WHERE mylink= '$parentlink'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $useremailToGiveABonus = $row["email"];
        }
    }
	return $useremailToGiveABonus;
}
function GetNameFrom($conn,$fromEmail)
{
	$nameFrom =""; 
    //1. select parent link from users where email = fromEmail
    $sql    = "SELECT * FROM user WHERE email= '$fromEmail'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $nameFrom = $row["name"];
        }
    }
    //2. select email  from users where my link = parent link
	
	return $nameFrom;
}
?>
