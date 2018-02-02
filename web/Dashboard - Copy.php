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
   <h3 class="tittle">Hello {{name}}, Welcome to World Wide Cash </h3>
   <br>
   <div class="panel panel-default" ng-show="showContent">
      <div class="panel-heading"></div>
      <div class="panel-body">
         <a href="Give-Help">
            <button type="button" class="btn btn-success">
               <h2>
               GIVE HELP
               <h2>
               <h6>Create your dream</h6>
            </button>
         </a>
      </div>
   </div>
     <div class="panel panel-default" ng-show="showCompleteYourDetails">
      <div class="panel-heading"></div>
      <div class="panel-body">
         <div class="alert alert-danger">
            <strong>Warning!</strong> Your details are not complete.
         </div>
       
         <div class="col-sm-12">
            <label></label><br>
            <input type="button"   value="COMPLETE YOUR DETAILS" class="myInput" ng-click="Complete()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/> <br><br>
         </div>
      </div>
   </div>
   <div class="panel panel-default" ng-show="showVerify">
      <div class="panel-heading"></div>
      <div class="panel-body">
         <div class="alert alert-danger">
            <strong>Warning!</strong> Your email address is not verified, check your emails and enter the code we sent you.
         </div>
         <div class="col-sm-12">
            <label>Verification Code</label><br>
            <input ng-model="mycode" type="number" class="myInput" placeholder="0000"><br><br>
         </div>
         <div class="col-sm-12">
            <label></label><br>
            <input type="button"   value="VERIFY" class="myInput" ng-click="Verify()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/> <br><br>
            <input type="button"   value="RESEND CODE" class="myInput" ng-click="Resend()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
         </div>
      </div>
   </div>
   <h4 style="width:100%; text-align:center; color:red; padding:1%">{{error}}</h4>
   <h4 style="width:100%; text-align:center; color:green; padding:1%">{{success}}</h4>
   <div class="panel panel-default" ng-show="showContent">
      <div class="panel-heading">
         <h2 style="width:100%; text-align:center; padding:2%; color:green">My Investments</h2>
      </div>
      <div class="panel-body">
         <table class="table table-striped">
            <thead>
               <tr>
                  <th>Date Invested</th>
                  <th>Amount Invested</th>
                  <th>Package</th>
                  <th>Dream</th>
                  <th> Today's Profit</th>
                  <th>Mature Date</th>
                  <th>Status</th>
				    <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <h1 class="wait">{{wait}}</h1>
               <tr ng-repeat="investment in investments">
                  <td>{{ investment.dateInvested }}</td>
                  <td>R {{ investment.amountInvested }}</td>
                  <td>{{ investment.package }} Months</td>
                  <td>{{ investment.dream }}</td>
                  <td>R {{ investment.amount }}</td>
                  <td>{{ investment.status }}</td>
                  <td>{{ investment.status }}</td>
                  <td><button type="button" class="btn btn-info" ng-click="Withdraw(investment)">Withdraw</button></td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
   
      <div class="panel panel-default" ng-show="showContent">
      <div class="panel-heading">
         <h2 style="width:100%; text-align:center; padding:2%; color:green">My Transictions</h2>
      </div>
      <div class="panel-body">
         <table class="table table-striped">
            <thead>
               <tr> 
                  <th>Amount</th>
                  <th>Transiction Type</th>
                  <th>Package</th>
                  <th>Create Date</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               <h1 class="wait">{{wait}}</h1>
               <tr ng-repeat="transiction in transictions">
                  <td>R {{ transiction.amount }}</td>
                  <td>withdrawal</td>
                  <td>{{ transiction.package }} Month(s)</td>
                  <td> {{ transiction.createdate }}</td>
                  <td>{{ transiction.status }}</td>
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