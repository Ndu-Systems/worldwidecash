<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="pendingController" ng-init="GetPending()">
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 ">
   <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">My  Withdrawals</h3>
      </div>
      <div class="panel-body">
         <div class="form-group">
            <input type="text" class="form-control" ng-model="search">
         </div>
         <h3 class="wait">{{wait}}</h3>
         <div class="container">
            <div class="row">
               <div class="col-md-5"  ng-repeat="pending in myWithdrals | filter:search">
                  <div class="card"  ng-repeat="amount in pending.withdrawals.withdrawal">
                    
                     <div class="card-block">
                        <div class="card-title">
                           <h4>{{ amount.notes }} : R{{ amount.amount }}</h4><br>
                           <h4><i class="fa fa-users"></i> Providers  <span class="badge">{{amount.providers.provider.length}}</span></h4>
                        </div>
                        <ul class="list-inline"  ng-repeat="provider in amount.providers.provider">
                           <li><i class="fa fa-user"></i> {{provider.user.name}}</li>
                           <li><i class="fa fa-envelope"></i> {{provider.user.email}}</li>
                           <li><i class="fa fa-phone"></i> {{provider.user.cell}}</li>
                           <li><i class="fa fa-wifi"></i>{{provider.status}}</li>
                           <li><i class="fa fa-registered"></i>R {{provider.amount}}</li>
                          
                        </ul>
                    
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
       
         <br>
         <h1 style="color:red">{{error}}</h1>
      </div>
   </div>
</div>
<!-- //stats -->
<?php
   //require 'footer.php';
   ?>