<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
   
     $id = $data->id;
      $status = 'active';
      $comment = $data->comment;
	

        $sql = "UPDATE investment SET
                        status='$status',
                        comment='$comment'
                        WHERE id = $id ";        
        
        if ($conn->query($sql) === TRUE) {
                echo "Amount verfied by Admin";
        }
        else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }    
?>
