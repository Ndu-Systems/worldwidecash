<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="amountTokeepController" ng-init="GetBonus()">
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 mainmenu">

 <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">Amount You Can Keep</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
  <input type="text" class="form-control" ng-model="search" ng-show="showBonus">
</div>
               <h3 class="wait">{{wait}}</h3>
     <div dir-paginate="bonus in bonuses | filter:search |itemsPerPage:5" class="panel panel-default" style="margin:2%; padding:1%">
			   
			    <!-- client-->
			  
			    <div class="panel-heading" style="background:#3498db; color:#ecf0f1; text-align:center">
				<b> R {{ bonus.amountkeepable }}</b>
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