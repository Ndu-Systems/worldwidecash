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
		<div class="container"   ng-controller="moreDetailsController">
			<div class="tittle_head">
				<h3 class="tittle">More about you</h3>
			</div>
			<div class="inner_sec_info_wthree_agile">
				<div class="form">
				
				<div class="row">
  <div class="col-sm-12">
   <label>Id Number</label><br>
	<input type="number" class="myInput" ng-model="id"/><br><br>
  </div>
   <div class="col-sm-12">
   <label>Cellphone Number</label><br>
	<input type="number" class="myInput" ng-model="cell"/><br><br>
  </div>
  <div class="col-sm-12">
   <label>Address Line</label><br>
	<textarea  class="myInput" ng-model="address"></textarea><br><br>
  </div>
  <div class="col-sm-12">
   <label>City</label><br>
	<input type="text" class="myInput" ng-model="city"/><br><br>
  </div>
  <div class="col-sm-12">
   <label>Select Country</label><br>
   <select ng-model="selectCountry" class="myInput" ng-options="country for country in countries"></select><br><br>
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