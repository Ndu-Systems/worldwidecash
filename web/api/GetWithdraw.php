<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
$investmentID= $data->investmentId;

$rows = array(); 
 $result = $conn->prepare("SELECT * FROM withdraw WHERE investmentID <> ? AND status = ?"); 
$result->execute(array($investmentID,'pending'));
if ($result->rowCount() > 0) {
while($row=$result->fetch(PDO::FETCH_OBJ)) {
		$rows["data"][]= $row;
	}
}

echo json_encode($rows);
//$conn->close();

?>
