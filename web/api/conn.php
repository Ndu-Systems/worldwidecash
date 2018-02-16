<?php
 $isLocal = false;
$servername = "127.0.0.1";
$username = "quunivn_main";
$password = "Harder01!";
$dbname = "quunivn_worldwidecash";

if($isLocal){
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "worldwidecash"; 
 }



$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>