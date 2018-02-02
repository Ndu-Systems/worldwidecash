<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$rows = array();
 $sql = "SELECT * FROM investment WHERE email = '$email' ORDER BY id desc ";
 //$sql = "SELECT * FROM investment WHERE id=4";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		// cal months
		$amount =0;
		$expectedAmount = $row["amountInvested"];
		$due_date = new DateTime($row["dateInvested"]);
		$due_expecedDate = new DateTime($row["expecedDate"]);
		$today = new DateTime();
		$months = $due_date->diff($due_expecedDate);
		 $diff = $months->m;
		if($diff >0){
			
			for( $i =1; $i< $diff; $i++){
				$expectedAmount= $expectedAmount*1.8;
			}
		}
		// cal days
		$amount =0;
		$amount = $row["amountInvested"];
		
		$now = time();
		$your_date = strtotime($row["dateInvested"]);
		$datediff = $now - $your_date;
		$diff1 = round($datediff / (60 * 60 * 24));
		if($diff1 >0){
			
			for( $i =1; $i<= $diff1; $i++){
				$amount= $amount*1.02667;
			}
		}
		// cal  hours rmaining
		
		//endcal
		
	
		
		//create on
		//$investment = new Investment($row["id"] , $row["dateInvested"], $row["amountInvested"], $row["status"], $row["doc"], $row["email"], $amount);
		$investment = new Investment();
		$investment->id = $row["id"];
		$investment->dateInvested = $row["dateInvested"];
		$investment->amountInvested = $row["amountInvested"];
		$investment->status = $row["status"];
		$investment->doc =  $row["doc"];
		$investment->email = $row["email"];
		$investment->package = $row["package"];
		$investment->dream = $row["dream"];
		$investment->keepername = $row["keepername"];
		$investment->keeperemail = $row["keeperemail"];
		$investment->keepercell = $row["keepercell"];
		$investment->keeperacc = $row["keeperacc"];
		$investment->keeperbrancode = $row["keeperbrancode"];
		$investment->keeperbankname = $row["keeperbankname"];
		$investment->timeallocated = $row["timeallocated"];
		$investment->expecedDate = $row["expecedDate"];
		$investment->expectedAmount = ceil($expectedAmount);
		$investment->datepaid = $row["datepaid"];
		$investment->amount = ceil($amount);
		//end create ob
		$rows["data"][]= $investment;
	}
}

echo json_encode($rows);
$conn->close();

?>
  <?php
        class Investment {
            public $id ;
            public $dateInvested;
            public $amountInvested;
            public $status;
			public $doc;
            public $email;
            public $amount;
            public $package;
            public $dream;
            public $keepername;
            public $keeperemail;
            public $keepercell;
            public $keeperacc;
            public $keeperbrancode;
            public $keeperbankname;
            public $timeallocated;
            public $datepaid;
            public $expecedDate;
            public $expectedAmount;
			
         // public function __construct( $id ,  $dateInvested ,  $amountInvested ,  $status ,  $doc ,  $email,$amount) {
		//	$this->$id= $id ;
         //   $this->$dateInvested= $dateInvested;
         //   $this->$amountInvested= $amountInvested;
         //   $this->$status= $status;
         //   $this->$email= $email;
         //   $this->$amount= $amount;
         //   }
          }
          
        ?>
