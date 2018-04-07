<?php
   require 'head.php';
   require 'nav3.php';
   ?>
<div class="banner_bottom" style="padding:0">
<div class="container" ng-controller="paidDreamController" ng-init="GetNotifications()">
   <div class="panel panel-default">
      <div class="panel-heading">
         <h4 style="width:100%; text-align:center; padding:2%; color:green">
            Paid Dreams

         </h4>
        

                     <div class="alert alert-success " ng-repeat="not in nots">
  <strong>
      
  {{not.senderName}} paid R{{not.amount}} to {{not.toName}}. On {{not.createdate}} 

   <button type="button" class="btn btn-info">
                       <a ng-href="{{not.doc}}" target="_blank">
                       View Proof  of Payment
                       </a>
                      </button>


                        <button type="button" class="btn btn-success" ng-click="Confirm(not)">Verify</button>


  </strong>
</div>
                   


      </div>
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
                  <th>Dream/Notes</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <tr ng-repeat="withdrawal in withdrawals | filter:searchMatch" >
                  <td>{{withdrawal.name}}</td>
                  <td> {{withdrawal.email}}</td>
                  <td>R {{withdrawal.amount}}</td>
                  <td>R {{withdrawal.balance}}</td>
                  <td>{{withdrawal.dream}}</td>
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