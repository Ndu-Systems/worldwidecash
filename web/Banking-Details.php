<?php
require 'head.php';
require 'nav.php';
?>
	<!--//Header-->
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
	<div class="banner_bottom">
		<div class="container"   ng-controller="bankingDetailsController">
			<div class="tittle_head">
				<h3 class="tittle">Banking-Details</h3>
			</div>
			<div class="inner_sec_info_wthree_agile">
				<div class="form">
				<div class="row">
  <div class="col-sm-12">
   <label>Bank Name</label><br>
	 <select ng-model="bankname" class="myInput" ng-options="bank for bank in banks"></select><br><br>
  </div>
   <div class="col-sm-12">
   <label>Account Number</label><br>
	<input type="text" class="myInput" ng-model="accountnumber"/><br><br>
  </div>
  
   <div class="col-sm-12">
    <label></label><br>
	<input type="button" value="SAVE" class="myInput" ng-click="Save()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
  </div>
  <div class="col-sm-12">
    <label></label><br>
<h4 class="message">  {{message}}<h4>
  </div>
</div>
				
				
				
				</div>
			</div>
			
				
			</div>
		</div>
	</div>
<?php
require 'footer.php';
?>