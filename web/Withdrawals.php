<?php
   require 'head.php';
   require 'nav3.php';
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
   <div class="container"   ng-controller="withdrawalsController" ng-init="GetWithdrawals()">
      <div class="tittle_head">
         <h3 class="tittle">All Withdrawals </span></h3>
      </div>
      <div class="inner_sec_info_wthree_agile" >
         <div class="row">
         <div class="form-group">
  <input type="text" class="form-control" ng-model="search">
</div>
         <table class="table">
    <thead>
      <tr>
        <th>Create date</th>
        <th> Amount</th>
        <th>Name</th>
        <th>Email</th>
        <th>Dream</th>
        <th>Status</th>
     
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="withdrawal in withdrawals | filter:search">
      <td>{{withdrawal.createdate}}</td>
      <td>R {{withdrawal.amount}}</td>
      <td>{{withdrawal.name}}</td>
       <td>{{withdrawal.email}}</td>
       <td>{{withdrawal.dream}}</td>
       <td>{{withdrawal.status}}</td>
      <td>
      </td>
      </tr>
    </tbody>
  </table>
         </div>
      </div>
	 
   </div>
</div>
<?php
   require 'footer.php';
 ?>
