<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

              $pendingbalance     = $data->pendingbalance; 
			  $id  = $data->id;            
			  $orderId  = $data->orderId;            
			  $email  = $data->email;            
			 
           
		   $sql = "
				UPDATE  withdraw  SET	 
                 pendingbalance ='$pendingbalance'
				
				WHERE id= $id 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					//echo 1;
				} else {
				//echo 0;
				}
// update order with keeper's details	
 $sql = "SELECT * FROM user WHERE email= '$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		 $keepername = $row['name'];
		 $keeperemail = $row['email'];
		 $keepercell = $row['cell'];
		 $keeperacc = $row['accountnumber'];
		 $keeperbrancode = $row['branch'];
		 $keeperbankname = $row['bankname'];
		 
		 // update invetement
		  $sql = "
				UPDATE  investment  SET	 
                 keepername ='$keepername',
                 keeperemail ='$keeperemail',
                 keepercell ='$keepercell',
                 keeperacc ='$keeperacc',
                 keeperbrancode ='$keeperbrancode',
                 keeperbankname ='$keeperbankname',
                 status ='allocated',
                 timeallocated =NOW()
				
				WHERE id= $orderId 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo "
					<br><br>
					------------------------------------------------------------------<br> <br> 
					Account Holder Name: $keepername <br> 
					Bank Name: $keeperbankname <br> 
					Branch: $keeperbrancode <br> 
					Account Number: $keeperacc <br>

					------------------------------------------------------------------<br> <br> 
					Cell: $keepercell <br>
					Email: $keeperemail <br>
					------------------------------------------------------------------<br> <br>
					You can call $keepername to confirm their banking details.

					
					";
				} 
	}
}			
						
?>


