<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<div class="banner_bottom"  style="padding:0">
<div class="container mainmenu"  ng-controller="referralController" ng-init="GetReferrals()">
<?php
   require 'sidemenu.php';
   ?>
<div class="col-sm-9 ">

 <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">My-Referrals</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
  <input type="text" class="form-control" ng-model="search">
</div>
               <h3 class="wait">{{wait}}</h3>
     <div dir-paginate="user in users | filter:search |itemsPerPage:5" class="panel panel-default" style="margin:2%; padding:1%">
			   
			    <!-- client-->
			  
			    <div class="panel-heading" style="background:#3498db; color:#ecf0f1; text-align:center">
				<b>{{ user.name }} {{ user.surname }} | {{ user.userstatus }}</b>
				</div>
                  <div class="row">
					 
					
				</div>
               </div>   


   </div> 
   </div>
</div>
<!-- //stats -->
<?php
   //require 'footer.php';
   ?>