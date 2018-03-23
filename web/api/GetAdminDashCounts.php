<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$rows = array();
//pendings
$result = $conn->prepare("SELECT * FROM investment WHERE status = ?"); 
$result->execute(array('Awaiting allocation'));

$counts = new Counts();
$counts->key ="Awaiting allocation";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//active
$result = $conn->prepare("SELECT * FROM investment WHERE status = ?"); 
$result->execute(array('active'));

$counts = new Counts();
$counts->key ="Active";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//allocated

$result = $conn->prepare("SELECT * FROM investment WHERE status = ?"); 
$result->execute(array('allocated'));


$counts = new Counts();
$counts->key ="Allocated";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//paid
$result = $conn->prepare("SELECT * FROM investment WHERE status = ?"); 
$result->execute(array('paid'));

$counts = new Counts();
$counts->key ="Paid";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//users 
 
$result = $conn->prepare("SELECT * FROM user WHERE role <> ?"); 
$result->execute(array('admin'));

$counts = new Counts();
$counts->key ="Users";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//Pending-penalty-fee

$result = $conn->prepare("SELECT * FROM user WHERE userstatus =?"); 
$result->execute(array('Pending-penalty-fee'));


$counts = new Counts();
$counts->key ="Pending-penalty-fee";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

//Messages
$result = $conn->prepare("SELECT * FROM chat WHERE ?"); 
$result->execute(array(1));


$counts = new Counts();
$counts->key ="Messages";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;

// amount kept  amountkept
$result = $conn->prepare("SELECT * FROM investment WHERE amountkept > ?"); 
$result->execute(array(0));

$counts = new Counts();
$counts->key ="Amount Kept";
$counts->value =$result->rowCount() ;
$rows["data"][]= $counts;


echo json_encode($rows);




//$conn->close();

?>
  <?php
        class Counts {
            public $key ;
            public $value;
			
			//public $users;
            //public $pendings ;
            //public $allocated;
            //public $active;
            //public $paid;
          }
          
        ?>
