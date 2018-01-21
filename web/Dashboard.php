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
		<div class="container"  ng-controller="dashController">
			<h3 class="tittle">Hello {{name}}, Welcome to World Wide Cash </h3> <br>

			<div class="panel panel-default">
  <div class="panel-heading"></div>
  <div class="panel-body">
  
  <a href="Give-Help">
  <button type="button" class="btn btn-success"><h2>GIVE HELP<h2><h6>Create your dream</h6></button>
  </a>
  
  
 
  </div>
</div>



<div class="panel panel-default">
  <div class="panel-heading">	<h2 style="width:100; text-align:center; padding:2%; color:green">My Investments</h2></div>
  <div class="panel-body">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Date Invested</th>
        <th>Amount Invested</th>
		<th> Today's Profit</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
	<h1 class="wait">{{wait}}</h1>
	  <tr ng-repeat="investment in investments">
    <td>{{ investment.dateInvested }}</td>
    <td>R {{ investment.amountInvested }}</td>
	  <td>R {{ investment.amount }}</td>
    <td>{{ investment.status }}</td>
	
  </tr>
    </tbody>
  </table>
  </div>
</div>


		
  

  
</h3>

	</div>
	<!-- //stats -->
	<?php
require 'footer.php';
?>