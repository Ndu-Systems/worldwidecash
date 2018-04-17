<?php
   require 'head.php';
   require 'nav3.php';
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
   <div class="container"   ng-controller="allocatedKeptAmountController">
      <div class="tittle_head">
         <h3 class="tittle">Allocate kept funds to a dreamer </span></h3>
         <h4>{{keepername}} kept - R{{amountKept}}</h4>
      </div>
      <div class="inner_sec_info_wthree_agile" >
         <div class="row">
         <div class="form-group">
  <input type="text" class="form-control" ng-model="amountToAllocate"> <br>
  <button type="button" class="btn btn-success" ng-click="Allocate()">Allocate</button>
<br>
<h4 style="color:red">{{error}}</h4>
</div>
       
         </div>
      </div>
	  
	 
   </div>
</div>
<?php
   require 'footer.php';
 ?>
