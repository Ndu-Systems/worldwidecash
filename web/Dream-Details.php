<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="dreamDreatilsController" >
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 ">

 <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">{{dream.dream}} : R {{dream.amountInvested}}</h3>
         <div class="keepers">
         <h4>Keepers  <span class="badge"> {{dream.numberOfKeepers}}</span></h4><br>
         <h4>Total Kept  Amount <span class="badge"> R {{dream.amountKept}}</span></h4><br>
        <h3 id="test"></h3>
            <table class="table table-bordered" style="width:100%">
               <thead>
                  <tr>
                     <th>Amount</th>
                     <th>Keeper Name</th>
                     <th>Keeper Email</th>
                     <th>Keeper Cell</th>
                     <th>Bank Name</th>
                     <th>Account Type</th>
                     <th>Account Number</th>
                     <th>Branch</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr ng-repeat="keeper in dream.keepers.keepers">
                   
                     <td> <b>  <span class="glyphicon glyphicon-registration-mark"></span> {{keeper.amount}}</b></td>
					   <td>{{keeper.user.name}} {{keeper.surname}}</td>
                     <td> {{keeper.user.email}}</td>
                     <td>{{keeper.user.cell}}</td>
                     <td>{{keeper.user.bankname}}</td>
                     <td>{{keeper.user.accountType}}</td>
                     <td>{{keeper.user.accountnumber}}</td>
                     <td>{{keeper.user.branch}} </td>
                     <td>{{keeper.status}}</td>
                     <td>
                     <div ng-if="keeper.status == 'pending'">
                     <button type="button" class="btn btn-success" ng-click="UploadProofOfPayment(keeper)">Upload Proof of Payment</button>
                    </div>

                     <div ng-if="keeper.status == 'paid'">
                     <button type="button" class="btn btn-info">
                       <a ng-href="{{keeper.proofOfPayment}}" target="_blank">
                       View Proof  of Payment
                       </a>
                      </button>
                    </div>
					 </td>
                  </tr>

               </tbody>
            </table>
         </div>
      </div>
      <div class="panel-body">
        <div class="form-group">
  <input type="text" class="form-control" ng-model="search" ng-show="showBonus">
</div>
               <h3 class="wait">{{wait}}</h3>
     <div dir-paginate="bonus in bonuses | filter:search |itemsPerPage:5" class="panel panel-default" style="margin:2%; padding:1%">
			   
			    <!-- client-->
			  
			    <div class="panel-heading" style="background:#3498db; color:#ecf0f1; text-align:center">
				<b>{{ bonus.nameFrom }} | R {{ bonus.amount }}</b>
				</div>
                  <div class="row">
					 
					
				</div>
               </div>   
			   <button type="button" style="float:right; margin-right:3%;" class="btn btn-success" ng-show="showBonus" ng-click="CashOut()">Cash Out</button>
			   <br>
			   <h3 style="color:red">{{error}}</h3>
			   <h3 style="color:green">{{msg}}</h3>


   </div> 
   </div>
</div>
<!-- //stats -->
<?php
   //require 'footer.php';
   ?>