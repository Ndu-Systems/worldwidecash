<?php
   require 'head.php';
   require 'nav2.php';
   ?>
<!--//top-bar-w3-agile-->
</div>
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
<!-- /about -->
<div class="banner_bottom">
<div class="container"  ng-controller="emailVerifyController">
   <h3 class="tittle">Hello {{name}}, Welcome to Funderslife </h3>
   <br>
 
   
   <div class="panel panel-default">
      <div class="panel-heading"></div>
      <div class="panel-body">
         <div class="alert alert-danger">
            <strong>Warning!</strong> Your email address is not verified, check your emails and enter the code we sent you.
         </div>
         <div class="col-sm-12">
            <label>Verification Code</label><br>
            <input ng-model="mycode" type="number" class="myInput" placeholder="0000"><br><br>
         </div>
         <div class="col-sm-12">
            <label></label><br>
            <input type="button"   value="VERIFY" class="myInput" ng-click="Verify()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/> <br><br>
            <input type="button"   value="RESEND CODE" class="myInput" ng-click="Resend()" style="background:#2ecc71; color:white; border: none; padding-top:2%;"/>
         </div>
      </div>
   </div>
   <h4 style="width:100%; text-align:center; color:red; padding:1%">{{error}}</h4>
   <h4 style="width:100%; text-align:center; color:green; padding:1%">{{success}}</h4>
  
   </h3>
</div>
<!-- //stats -->
<?php
   require 'footer.php';
   ?>