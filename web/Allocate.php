<?php
require 'head.php';
require 'nav3.php';
?>

    <div class="banner_bottom" style="padding:0">
        <div class="container" ng-controller="allocateController" ng-init="GetWithdrawals()">
          
			 <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 style="width:100%; text-align:center; padding:2%; color:green">{{investmentName}}  want to donate R{{amountInvested}} - <a href="Create-Allocation">Create Allocation</a></h4></div>
                <div class="panel-body">
				   <hr>
				   <h5><font color:black>People who need help </font></h5>
				   <hr>
				   	<input type="text" class="myInput" ng-model="searchMatch"/><br><br>
 <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Amount</th>
        <th>Balance</th>
        <th>Pending Balance</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="withdrawal in withdrawals | filter:searchMatch" >
        <td>{{withdrawal.name}}</td>
        <td> {{withdrawal.email}}</td>
        <td>R {{withdrawal.amount}}</td>
        <td>R {{withdrawal.balance}}</td>
        <td>R <font color="red"><b>{{withdrawal.pendingbalance}}</b></font></td>
        <td><button type="button" class="btn btn-primary" ng-click="Allocate(withdrawal)">Allocate</button></td>
      </tr>
     
    </tbody>
  </table>
				 
                </div>
            </div>



        </div>
        <!-- //stats -->
        <?php
require 'footer.php';
?>