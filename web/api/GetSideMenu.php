<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
$parentlink = $data->parentlink;

$rows = array();

//members
 $sql = "SELECT * FROM user WHERE parentlink <> '$parentlink'";
$result = $conn->query($sql);
$counts = new Counts();
$counts->key ="members";
$counts->value =$result->num_rows ;
$rows["data"][]= $counts;


echo json_encode($rows);




$conn->close();

?>
  <?php
        class Counts {
            public $key ;
            public $value;
          }
          
        ?>
