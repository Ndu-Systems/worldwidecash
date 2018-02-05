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
   
   
   <div class="panel panel-default" ng-controller="investmentController">
      <div class="panel-heading">
         <h2 style="width:100%; text-align:center; padding:2%; color:green">Upload Proof Of Payment</h2>
      </div>
      <div class="panel-body">
        
          
      		<div class="col-sm-12">
			 <div class="newsletter">
									
									
												<label>Proof of payment</label><br>
												<input class="email" type="file"  onchange="angular.element(this).scope().filesChanged(this)"><br>
						<br>				
						<button type="button" class="btn btn-info" ng-click="Invest()">Confirm</button>

						</div>
						<div  class="newsletter" >
						<div class="message">	{{message}} </div>
						<div class="success"><h4>{{success}}</h4></div> <br>
						<button type="button" class="btn btn-info" ng-show="back" ng-click="Back()">Back Home</button>
						</div>
				</div>
		</div>
			 
		</div>
       
      </div>
   </div> 
   </div>
</div>
<!-- //stats -->
<?php
   //require 'footer.php';
   ?>