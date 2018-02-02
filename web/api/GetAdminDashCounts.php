<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$rows = array();
//pendings
 $sql = "SELECT * FROM investment WHERE status = 'pending'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="Pending";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;

//active
 $sql = "SELECT * FROM investment WHERE status = 'active'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="Active";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;

//allocated
 $sql = "SELECT * FROM investment WHERE status = 'allocated'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="Allocated";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;

//paid
 $sql = "SELECT * FROM investment WHERE status = 'paid'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="Paid";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;
//paid
 $sql = "SELECT * FROM user WHERE role <> 'admin'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="Users";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;


echo json_encode($rows);




$conn->close();

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
