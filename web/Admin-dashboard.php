<?php
require 'head.php';
require 'nav3.php';
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
		<div class="container"  ng-controller="adminController">
			<h3 class="tittle">Hello {{name}},<font color="orange">ADMIN!</font> </h3> <br>

<div class="panel panel-default">
  <div class="panel-heading">	<h2 style="width:100; text-align:center; padding:2%; color:green">All Investments</h2></div>
  <div class="panel-body">
  <table class="table table-striped">
    <thead>
      <tr>
	  
		  <th>Email</th>
        <th>Date Invested</th>
        <th>Amount Invested</th>
		<th> Today's Profit</th>
        <th>Status</th>
		 <th>Proof of Payment</th>
		 <th>Actions</th>
      </tr>
    </thead>
    <tbody>
	<h1 class="wait">{{wait}}  <input type="text" class="form-control" id="usr"  ng-model="searchTransiction"  placeholder="Search..."></h1>
	  <tr ng-repeat="investment in investments | filter:searchTransiction">
	   <td>{{ investment.email }}</td>
    <td>{{ investment.dateInvested }}</td>
    <td>R {{ investment.amountInvested }}</td>
	  <td>R {{ investment.amount }}</td>
    <td>{{ investment.status }}</td>
	  <td><a href ="{{ investment.doc}}" target="_blank">Proof of Payment</a></td>
	    <td><button type="button" class="btn btn-primary" ng-click="Verify(investment)">Verify</button></td>

  </tr>
    </tbody>
  </table>
  </div>
</div>


<div class="panel panel-default">
  <div class="panel-heading">	<h2 style="width:100; text-align:center; padding:2%; color:green">All Users</h2></div>
  <div class="panel-body">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Cell</th>
        <th>Address</th>
        <th>Bank Name</th>
        <th>Bank Acc No</th>
        <th>Date Rgistered</th>
		  <th>Action</th>
		
      </tr>
    </thead>
    <tbody>
	<h1 class="wait">{{wait}}  <input type="text" class="form-control" id="usr" ng-model="searchUser" placeholder="Search..."></h1>
	  <tr ng-repeat="user in users  | filter:searchUser">
    <td>{{ user.name }}</td>
    <td>{{ user.surname }}</td>
	  <td>{{ user.email }}</td>
    <td>{{ user.cell }}</td>
    <td>{{ user.address }}</td>
    <td>{{ user.bankname }}</td>
    <td>{{ user.accountnumber }}</td>
    <td>{{ user.createdate }}</td>
    <td><button type="button" class="btn btn-primary" ng-click="More(user)">More</button></td>
	
	
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