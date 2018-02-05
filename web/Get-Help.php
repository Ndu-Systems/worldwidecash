<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu">
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 mainmenu"   ng-controller="getHelpController">

   <div class="panel panel-default">
      <div class="panel-heading">
         <h2 style="width:100%; text-align:center; padding:2%; color:green">Get Help</h2>
      </div>
      <div class="panel-body">
        
          
      		<div>
      		  <div class="col-md-3"></div>
			  <div class="col-md-6">
				 <div class="form-group">
                       <b ng-show="showDonateButton">Your dream: {{dream}}, amount: R{{amount}} is matured, Withdraw now ? </b>
						   {{message}}
                  </div>
                 
				 
                  <hr/>
                  <div class="form-group">
                     <input type="button"  ng-show="showDonateButton" value="Yes" class="myInput" ng-click="Withdraw()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
					<input type="button"  ng-show="showDashteButton" value="GO TO MY DASHBOARD" class="myInput" ng-click="GoToDashboard()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
				
                   </div>
				</div>
				<div class="col-md-3"></div>
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