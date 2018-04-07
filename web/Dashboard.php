<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
   <div class="container mainmenu" style="position:relative" ng-controller="dashController" ng-init="GetInvestments()">
      <?php
         require 'sidemenu.php';
         ?>
      <div class="col-sm-9 ">
         
         
         <div class="panel panel-default" ng-show="ShowNotification">
            <div class="panel-heading">
               <h3 style="width:100%; text-align:center; padding:2%; color:green"> Notifications ({{notCount}})</h3>
            </div>
            <div class="panel-body" ng-repeat="not in notifications">
               <div class="alert alert-danger">
                  <strong>Warning!</strong> {{not.senderName}} Provided help of R{{not.amount}}, If the money reflect on
                  your bank please confirm, Else please wait until the money reflects <br>
                  Proof of Payment: <b><a ng-href="{{not.doc}}" target="_blank">View</a> <br>
               </div>
               <div class="col-sm-12">
                  <label></label><br>
                  <input type="button"   value="I RECEIVED THE MONEY" class="myInput" ng-click="Confirm(not)" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/> <br><br>
               </div>
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
         <h4 style="width:100%; text-align:center; color:red;">{{error}}</h4>
         <h4 style="width:100%; text-align:center; color:green; padding:1%">{{success}}</h4>





         <div class="panel panel-default" ng-show="showContent">
            <div class="panel-heading">
               <h3 style="width:100%; text-align:center; padding:2%; color:green">My Dreams</h3>
            </div>
            <div class="panel-body">
               <h3 class="wait">{{wait}}</h3>
               <div  class="panel panel-default" style="">
			   <div class="container" style="width:100%">
            <div class="row">
               <div class="col-md-4" ng-repeat="investment in investments">
                  <div ng-class="investment.css">
                     <div class="dash-box-icon">
                        <i class="glyphicon glyphicon-registration-mark"></i>
                     </div>
                     <div class="dash-box-body">
                     <span class="dash-box-count" style="font-size:18px"># {{investment.id}}</span>
					 <span class="dash-box-count" style="font-size:18px">{{investment.dream}}</span>
					 <hr>
                        <span class="dash-box-count" style="font-size:18px">Invested: R {{investment.amountInvested}}</span>
                        <span class="dash-box-title">{{investment.dateInvested}}</span>
						<hr>
						<span class="dash-box-count" style="font-size:18px">On Maturity: R {{investment.expectedAmount}}</span>
                        <span class="dash-box-title">{{investment.expecedDate}}</span>
						<hr>
						<span class="dash-box-count" style="font-size:18px">Growth: R {{investment.amountInvested}}</span>
						<hr>
						<span class="dash-box-count" style="font-size:18px">Status: <button type="button" class="btn btn-primary">{{investment.status}}</button></span>
						<hr>
						<span class="dash-box-count" style="font-size:18px">Keepers  <span class="badge"> {{investment.numberOfKeepers}}</span></span>
						<hr>
                     </div>
                     <div class="dash-box-action">
                        <button ng-click="InvestmentDetails(investment)">More Info</button>
                     </div>
                  </div>
               </div>
              
            </div>
               </div>
            </div>
         </div>
       
      </div>
	   </div>
   </div>
</div>
  <?php
            require 'dashfooter.php';
            ?>
<!-- //stats -->