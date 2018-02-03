<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="dashController" ng-init="GetInvestments()">
<div class="col-sm-3 sidemenu">
<h1 class="usericon">
<span class="glyphicon glyphicon-user"></span>
</h1>
<h1 class="username">
Hello {{name}}
</h1>

<ul class="list-group">
  <li class="list-group-item"><a href="Messages"><span class="glyphicon glyphicon-envelope"></span> Messages</a></li>
  <li class="list-group-item"><a href="Give-Help"><span class="glyphicon glyphicon-heart-empty"></span> Donate</a></li>
  <li class="list-group-item"><a href="Dashboard"><span class="glyphicon glyphicon-th"></span> Dashboard</a></li>
  <li class="list-group-item"><a href="History"><span class="glyphicon glyphicon-th-list"></span> History</a></li>
  <li class="list-group-item"><a href="Logout"><span class="glyphicon glyphicon-off"></span> Logout</a></li>
</ul>
</div>
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
         <h2 style="width:100%; text-align:center; padding:2%; color:green">Give Help</h2>
      </div>
      <div class="panel-body">
        
          
      		<div ng-controller="ghController">
      		  <div class="col-md-3"></div>
			  <div class="col-md-6">
				 <div class="form-group">
                       <b>Name Your Dream </b>
                       <textarea  class="myInput" ng-model="dream" placeholder="EG: To Buy a BMW 320i"></textarea>
                  </div>
                  <div class="form-group">
                       <b>Select Amount </b>
                       <select ng-model="amount" class="myInput" ng-options="amount for amount in packeges"></select>
                  </div>
				  <div class="form-group">
                       <b>Select Investment Period in Months </b>
                        <select ng-model="peroid" class="myInput" ng-options="peroid for peroid in peroids"></select><br><br>
                  </div>
                  <hr/>
                  <div class="form-group">
                     <input type="button"  ng-show="showDonateButton" value="DONATE" class="myInput" ng-click="Donate()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
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