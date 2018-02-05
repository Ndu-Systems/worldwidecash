<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="dashController" ng-init="GetInvestments()">
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 mainmenu">

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
         <h2 style="width:100%; text-align:center; padding:2%; color:green">My Dreams</h2>
      </div>
      <div class="panel-body">
        
               <h3 class="wait">{{wait}}</h3>
           <div ng-repeat="investment in investments" class="panel panel-default" style="margin:2%; padding:1%">
			     <!-- PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING -->
			   <div ng-if="investment.status == 'pending'" class="pending">
			    <div class="panel-heading" style="color:black; text-align:center">
				<h3>You requested to provide help of R {{ investment.amountInvested }}</h3>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  Dream: <b>{{ investment.dream }}</b> <br>
					  Status: <b>waiting for beneficiary</b> <br>
					  </div>
					  <div class="col-sm-4">  </div>
					  <div class="col-sm-4">  </div>
				</div>
               </div>   
			   <!-- PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING - PENDING -->
			   
			    <!-- ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED -->
			   <div ng-if="investment.status == 'allocated'" class="allocated">
			    <div class="panel-heading" style=" color:black; text-align:center; margin-bottom:1%">
				<h3>You have to make  of R {{ investment.amountInvested }} to {{ investment.keepername }}</h3>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  Status: <b>Waiting for payment</b> <br>
					  Date  Allocated: <b>{{ investment.timeallocated }}</b> <br>
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
					  <h3 style="color:red">
					  Time Remaining: 22:00:22
					  </h3><br>
						<button type="button" class="btn btn-info" ng-click="UploadProofOfPayment(investment)">Upload Proof Of Payment</button>
					  </div>
				</div>
               </div>   
			   <!-- ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED - ALLOCATED -->
			   
			     <!-- PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID -->
			   <div ng-if="investment.status == 'paid'" class="allocated">
			    <div class="panel-heading" style="color:black; text-align:center">
				<h3>We are waiting for  {{ investment.keepername }} to confirm the payment</h3>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  Status: <b>Pending payment confirmation</b> <br>
					  Date: <b>{{ investment.datepaid }}</b> <br>
					  Proof of Payment: <b><a ng-href="{{investment.doc}}" target="_blank">View</a> <br>
					  </div>
					  <div class="col-sm-4">  </div>
					  <div class="col-sm-4">
						
					  </div>
				</div>
               </div>   
			   <!-- PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID - PAID -->
			   
			    <!-- ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE -->
			   <div ng-if="investment.status == 'active'" class="activedream">
			    <div class="panel-heading " style="color:white; text-align:center">
				<h3> {{ investment.keepername }} Confirmed the payment - ACTIVE </h3>
				</div>
                  <div class="row">
					  <div class="col-sm-12">
					  <table>
						<tr><td>Donation   </td><td><b>: R {{ investment.amountInvested }}</b> 		</td></tr>
						<tr><td>Date       </td><td><b>: {{ investment.dateInvested }}</b>           </td></tr>
						<tr><td>Dream      </td><td><b>:  {{ investment.dream }}</b>                 </td></tr>
						<tr><td>Growth     </td><td><b>: R {{ investment.amount }}</b>               </td></tr>
						<tr><td>Target     </td><td><b>: R {{ investment.expectedAmount }}</b>       </td></tr>
						<tr><td>Mature On  </td><td><b>: {{ investment.expecedDate }}</b>            </td></tr>
					    <tr><td>Status:	   </td><td><b>: Processing</b> <br>                         </td></tr>
						 </table>
					  </div>
					
				</div>
               </div>   
			   <!-- ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE -->
		   
		    <!-- MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED -->
			   <div ng-if="investment.status == 'matured'" class="matured">
			    <div class="panel-heading " style="color:white; text-align:center">
				<h3> {{ investment.keepername }} CONGRATULATIONS! DREAM MATURED </h3>
				</div>
                  <div class="row">
					  <div class="col-sm-12">
					  <table>
						<tr><td>Donation   </td><td><b>: R {{ investment.amountInvested }}</b> 		</td></tr>
						<tr><td>Date       </td><td><b>: {{ investment.dateInvested }}</b>           </td></tr>
						<tr><td>Dream      </td><td><b>:  {{ investment.dream }}</b>                 </td></tr>
						<tr><td>Growth     </td><td><b>: R {{ investment.expectedAmount }}</b>               </td></tr>
						<tr><td>     </td><td>
						<br>
												<button type="button" class="btn btn-success" ng-click="GetHelp(investment)">Get Help!</button>

						
					       </td></tr>
						 </table>
					  </div>
					
				</div>
               </div>   
			   <!-- MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED - MATURED -->
		   
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
</div>
<!-- //stats -->
<?php
   //require 'footer.php';
   ?>