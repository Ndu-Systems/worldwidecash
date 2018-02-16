<?php
   require 'head.php';
   require 'nav.php';
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
   <div class="container"   ng-controller="loginController">
      <div class="tittle_head">
         <h3 class="tittle">Password <span>Reset </span></h3>
      </div>
      <div class="inner_sec_info_wthree_agile" >
         <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
               <div  class="newsletter">
                  <label>Your Email</label><br>
                  <input class="email" type="email" ng-model="emailforotp" placeholder="" required=""><br><br>
                  <br>				
                  <button type="button" class="btn btn-info" ng-click="SendOTP()">Reset</button>
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