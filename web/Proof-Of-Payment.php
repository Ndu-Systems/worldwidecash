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