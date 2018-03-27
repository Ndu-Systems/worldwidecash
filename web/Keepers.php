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
   <div class="container"   ng-controller="keepersController" ng-init="GetKeepers()">
      <div class="tittle_head">
         <h3 class="tittle">Keepers </span></h3>
      </div>
      <div class="inner_sec_info_wthree_agile" >
         <div class="row">
         <div class="form-group">
  <input type="text" class="form-control" ng-model="search">
</div>
         <table class="table">
    <thead>
      <tr>
        <th> Name</th>
        <th>Email</th>
        <th>Amount Invested</th>
        <th>Date Invested</th>
        <th>Maturity date</th>
        <th>Amount Keepable</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="investment in investments | filter:search">
      <td>{{investment.name}}</td>
      <td>{{investment.email}}</td>
      <td>{{investment.amountInvested}}</td>
       <td>{{investment.dateInvested}}</td>
       <td>{{investment.expecedDate}}</td>
       <td>R {{investment.amountkeepable}}</td>
      <td>
      <button type="button" class="btn btn-success" ng-click="MoreOptions(investment)">More</button>
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
