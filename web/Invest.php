<?php
require 'head.php';
require 'nav2.php';
?>
		<!--//top-bar-w3-agile-->
	</div>
	<!--/inner_banner-->
	<div class="inner_banner">
	</div>
	<!--//inner_banner-->
	<!--/short-->
	<div class="services-breadcrumb">
		<div class="inner_breadcrumb">

			
		</div>
	</div>
	<!--//short-->
	<!-- /inner_content -->
	<!-- /about -->
	<div class="banner_bottom">
		<div class="container"  ng-controller="investmentController">
	
			<div class="panel panel-default">
  <div class="panel-heading"><h2 style="width:100; text-align:center; padding:2%; color:green">New investment</h2></div>
  <div class="panel-body">
	<div class="col-sm-6">
  <p>
  <br>
 <b>
 Please deposit your investent in one of the bellow account numbers, and upload your proof of payment.
 <br> <br>
BANK: FNB  <br>
ACCOUNT : ALTCOIN TRADE  <br>
ACCOUNT TYPE: CHEQUE <br>
ACCOUNT NUMBER: 62529626717 <br>
REFERENCE: Putc-bbd5d2-156176 <br> <br>

BANK :ABSA <br>
ACCOUNT: ALTCOIN TRADE  <br>
ACCOUNT TYPE: CURRENT  <br>
ACCOUNT NUMBER: 4089791905 <br>
REFERENCE: Putc-bbd5d2-156176 <br> <br>

 Bank: STANDARD BANK  <br>
ACCOUNT:ALTCOIN TRADE  <br>
ACCOUNT TYPE: CURRENT  <br>
ACCOUNT NUMBER:021276617 <br>
REFERANCE: Putc-bbd5d2-156176 <br>
 </b>
  </p>
	</div>

	<div class="col-sm-6">
	<div  class="newsletter">	
			  <label>Amount</label><br>
						<input class="myInput" type="number" ng-model="amount" placeholder="" required=""><br><br>
						<label>Proof of payment</label><br>
						<input class="myInput" type="file"  onchange="angular.element(this).scope().filesChanged(this)"><br>
<br>				
<button type="button" class="btn btn-info" ng-click="Invest()">Confirm</button>
<div class="message">	{{message}} </div>
<div class="success"><h4>{{success}}</h4></div>
</div>
	</div>
  </div>
</div>




</div>


		
  

  
</h3>

	</div>
	<!-- //stats -->
	<?php
require 'footer.php';
?>