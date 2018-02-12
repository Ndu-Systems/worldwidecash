<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="pendingController" ng-init="GetPending()">
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 mainmenu">

 <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">My Pending Withdraw</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
  <input type="text" class="form-control" ng-model="search">
</div>
               <h3 class="wait">{{wait}}</h3>
     <div dir-paginate="pending in pendings | filter:search |itemsPerPage:1000" class="panel panel-default" style="margin:2%; padding:1%">
			   
			    <!-- client-->
			  
			    <div class="panel-heading" style="background:#3498db; color:#ecf0f1; text-align:center">
				Date Created: <b>{{ pending.createdate }} </b> <br>
				Description: <b>{{ pending.dream }} </b> <br>
				Amount: <b>R {{ pending.amount }} </b> <br>
			
				</div>
                  <div class="row">
					
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