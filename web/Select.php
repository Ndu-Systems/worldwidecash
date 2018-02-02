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
<div class="container"  ng-controller="selectController" ng-init="GetInvestments()">
   
   <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">{{key}}</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
  <input type="text" class="form-control" ng-model="search">
</div>
               <h3 class="wait">{{wait}}</h3>
               <div ng-repeat="investment in investments | filter:search" class="panel panel-default" style="margin:2%; padding:1%">
			   
			    <!-- client-->
			   <div ng-if="investment.role == 'Client'" class="client">
			    <div class="panel-heading" style="background:#3498db; color:#ecf0f1; text-align:center">
				<b>{{ investment.name }} {{ investment.surname }} | {{ investment.userstatus }}</b>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Email: <b>{{ investment.email }}</b> <br>
					  Cell: <b>{{ investment.cell }}</b> <br>
					  Address: <b>{{ investment.address }}</b> <br>
					  Country: <b>{{ investment.country }}</b> <br>
					  Id NO.: <b>{{ investment.idnum }}</b> <br>
					  </div>
					  <div class="col-sm-4">
						Bank name: <b>{{ investment.bankname }}</b> <br>
					  Account Type: <b>{{ investment.accountType }}</b> <br>
					  Branch: <b>{{ investment.branch }}</b> <br>
					  Account number: <b>{{ investment.accountnumber }}</b> <br>
					   </div>  
					  <div class="col-sm-3">
					  <br>
					  <button type="button" class="btn btn-info" ng-click="Lock(investment)">Lock</button> 
					  <button type="button" class="btn btn-info" ng-click="UnLock(investment)">Un-Lock</button> 
					  <button type="button" class="btn btn-info" ng-click="Delete(investment)">Delete</button> 
					  </div>
				</div>
               </div>   
			   
			
			   
			     <!-- PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING -->
			   <div ng-if="investment.status == 'pending'">
			    <div class="panel-heading" style="background:#f1c40f; color:black; text-align:center">
				<b>{{ investment.name }} requested to provide help of R {{ investment.amountInvested }} for {{investment.package}} Months</b>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  Status: <b>waiting for beneficiary</b> <br>
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  </div>
					  <div class="col-sm-4">  </div>
					  <div class="col-sm-4">
					  <br>
					  <button type="button" class="btn btn-info" ng-click="Allocate(investment)">Allocate</button> 
					  </div>
				</div>
               </div>   
			   <!-- PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING -->
			   
			    <!-- ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED -->
			   <div ng-if="investment.status == 'allocated'">
			    <div class="panel-heading" style="background:#f1c40f; color:black; text-align:center; margin-bottom:1%">
				<b>You have to make  of R {{ investment.amountInvested }} to {{ investment.keepername }}</b>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  Status: <b>Waiting for payment</b> <br>
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  </div>
					  <div class="col-sm-4"> 
					  Beneficiary Name: <b>{{ investment.keepername }}</b> <br>
					  Beneficiary Email: <b>{{ investment.keeperemail }}</b> <br>
					  Beneficiary Cell: <b>{{ investment.keepercell }}</b> <br>
					  Beneficiary Bank Name: <b>{{ investment.keeperbankname }}</b> <br>
					  Beneficiary Bank Acc No.: <b>{{ investment.keeperacc }}</b> <br>
					  Beneficiary Branch Code.: <b>{{ investment.keeperbrancode }}</b> <br>
					  </div>
					  <div class="col-sm-4"> 
					 
					  </div>
				</div>
               </div>   
			   <!-- ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED -->
			   
			     <!-- PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID -->
			   <div ng-if="investment.status == 'paid'">
			    <div class="panel-heading" style="background:#f1c40f; color:black; text-align:center">
				<b>We are waiting for  {{ investment.keepername }} to confirm the payment</b>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  Status: <b>Pending payment confirmation</b> <br>
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  </div>
					  <div class="col-sm-4">  </div>
					  <div class="col-sm-4">
						<h4><a ng-href="{{investment.doc}}" target="_blank">Proof of payment</a></h4>
						<h5>{{investment.datepaid}}</h5>
					  </div>
				</div>
               </div>   
			   <!-- PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID -->
			   
			   
			   
			    <!-- ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE -->
			   <div ng-if="investment.status == 'active'">
			    <div class="panel-heading" style="background:#2ecc71; color:white; text-align:center">
				<b> {{ investment.keepername }} confirmed the pament - ACTIVE </b>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
						Amount Investmented :  <b>R {{ investment.amountInvested }}</b> <br>
					  Status: <b>active</b> <br>
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  </div>
					  <div class="col-sm-4"> 
					  
					  </div>
					  <div class="col-sm-4"> 
						Mature Date: <b>{{ investment.expecedDate }}</b> <br>
						Today's Amount: <b>R {{ investment.amount }}</b> <br>
						  Amount on Mature: <b>R {{ investment.expectedAmount }}</b> <br>
						
 					  </div>
				</div>
               </div>   
			   <!-- ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE -->
			   
			   
			   
			    <!--
				  
				  <td>{{ investment.dateInvested }}</td>
                  <td>R {{ investment.amountInvested }}</td>
                  <td>{{ investment.package }} Months</td>
                  <td>{{ investment.dream }}</td>
                  <td>R {{ investment.amount }}</td>
                  <td>{{ investment.status }}</td>
                  <td>{{ investment.status }}</td>
				    <td><button type="button" class="btn btn-info" ng-click="Withdraw(investment)">Withdraw</button></td>
				  -->
			      </div>
       
      </div>
   </div>

   </h3>
</div>
<!-- //stats -->
<?php
   require 'footer.php';
   ?>