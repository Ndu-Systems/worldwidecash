<?php
   require 'head.php';
   //require 'nav.php';
   ?>
<!--//Header-->
<!--/inner_banner-->
<div class="inner_banner">
</div>
<!--//inner_banner-->
<!--/short-->
<div class="services-breadcrumb">
   <div class="inner_breadcrumb">
   </div>
</div>
<!--//short-->
<!-- /inner_content -->
<div class="banner_bottom">
   <div class="container"   ng-controller="unlockController">
      <div class="tittle_head">
         <h3 class="tittle"style="color:red">Your account is locked due to late payment</h3>
         <h3 class="tittle"style="color:green">To unlock please pay a penalty for R400 and upload the proof of payment</h3>
      </div>
      <div class="inner_sec_info_wthree_agile" >
         <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
               <div  class="newsletter">
               <label>Proof of payment</label><br>
				<input class="email" type="file"  onchange="angular.element(this).scope().filesChanged(this)"><br>
                  <br>				
                  <button type="button" class="btn btn-info" ng-click="Pay()">Pay</button>
                  <a href="Logout"> 
                   <button type="button" class="btn btn-danger">Cancel</button>
                   </a>
               
                  <div class="message">	{{message}} </div>
				           <h4 style="color:green; text-align:center">{{success}}</h4>

               </div>
            </div>
            <div class="col-sm-4"></div>
         </div>
      </div>
	  
	 
   </div>
</div>
<?php
   require 'footer.php';
   ?>