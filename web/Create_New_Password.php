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
	<div class="container"   ng-controller="resetController">
	<div class="tittle_head">
	<h3 class="tittle">User <span>Login </span></h3>
	</div>
	<div class="inner_sec_info_wthree_agile">
	<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
	<div  class="newsletter">	
	
	<label>Password</label><br>
	<input class="email" type="password"  ng-model="password" placeholder="8 characters minimum"  ng-disabled="edit"  required=""><br>
	
	<label>Confirm Password</label><br>
	<input class="email" type="password"  ng-model="passwordConfirm" placeholder="Confirm.."  ng-disabled="edit"  required=""><br>
	<br>				
	<button type="button" class="btn btn-info" ng-click="Update()"  ng-disabled="edit" >Update</button>
	<div class="message">	{{message}} </div>
	
	</div>
	<div class="alert alert-success" ng-show="passwoedupdatedone">
  <strong>Success!</strong> Password updated successfully. Go to <a href="Login"> Login</a>
</div>
	</div>

	<div class="col-sm-4"></div>
	</div>


	</div>
	</div>
	</div>
	<?php
	require 'footer.php';
	?>