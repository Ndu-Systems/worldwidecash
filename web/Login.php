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
	<div class="container"   ng-controller="loginController">
	<div class="tittle_head">
	<h3 class="tittle">User <span>Login </span></h3>
	</div>
	<div class="inner_sec_info_wthree_agile">
	<div class="row">
	<div class="col-sm-4"></div>
	<div class="col-sm-4">
	<div  class="newsletter">	
	<label>Email</label><br>
	<input class="email" type="email" ng-model="email" placeholder="Your email..." required=""><br><br>
	<label>Password</label><br>
	<input class="email" type="password"  ng-model="password" placeholder="Your password..." required=""><br>
	<br>				
	<button type="button" class="btn btn-info" ng-click="Login()">Login</button>
	<div class="message">	{{message}} </div>
	<a href="Reset-Password"> Forgot password?</a>
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