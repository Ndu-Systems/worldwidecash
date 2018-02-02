<?php
require 'head.php';
require 'nav2.php';
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
		<div class="container"   ng-controller="ghController">
			<div class="tittle_head">
				<h3 class="tittle">Give Help</h3>
			</div>
			<div class="inner_sec_info_wthree_agile">
				<div class="form">
				<div class="row">
				  <div class="col-sm-12">
   <label>Name Your Dream</label><br>
	<textarea  class="myInput" ng-model="dream" placeholder="EG: To Buy a BMW 320i"></textarea><br><br>
  </div>
  <div class="col-sm-12">
   <label>Amount</label><br>
	 <select ng-model="amount" class="myInput" ng-options="amount for amount in packeges"></select><br><br>
  </div>
   <div class="col-sm-12">
   <label>Investment Peroid in <b>Months</b></label><br>
	 <select ng-model="peroid" class="myInput" ng-options="peroid for peroid in peroids"></select><br><br>
  </div>
  
   <div class="col-sm-12">
    <label></label><br>
	<input type="button"  ng-show="showDonateButton" value="DONATE" class="myInput" ng-click="Donate()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
	<input type="button"  ng-show="showDashteButton" value="GO TO MY DASHBOARD" class="myInput" ng-click="GoToDashboard()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
  </div>
  <div class="col-sm-12">
    <label></label><br>
<h4 class="message">  {{message}}<h4>
<h4 class="success">  {{success}}<h4>
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