<?php
   require 'head.php';
   require 'nav3.php';
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
<div class="container"  ng-controller="amountKeptController" ng-init="GetKeepers()">
   
   <div class="panel panel-default">
      <div class="panel-heading">
         <h3 style="width:100%; text-align:center; padding:2%; color:green; text-transform:capitalize">{{key}}</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
  <input type="text" class="form-control" ng-model="search">
</div>
               <h3 class="wait">{{wait}}</h3>
     <div dir-paginate="investment in investments | filter:search |itemsPerPage:5" class="panel panel-default" style="margin:2%; padding:1%">
			   
			
			 
			    <!-- ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE -->
			   <div ng-if="investment.amountkept >0">
			    <div class="panel-heading" style="background:#2ecc71; color:white; text-align:center">
				<b> Amount Kept R{{investment.amountkept}} </b>
				</div>
                  <div class="row">
					  <div class="col-sm-4">
						Amount Investmented :  <b>R {{ investment.amountInvested }}</b> <br>
					  Status: <b>active</b> <br>
					  Date: <b>{{ investment.dateInvested }}</b> <br>
					  </div>
					  <div class="col-sm-4"> 
					  
					  </div>
					  <div class="col-sm-4"> 
						Mature Date: <b>{{ investment.expecedDate }}</b> <br>
					
						
 					  </div>
				</div>
               </div>   
			   <!-- ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE - ACTIVE -->
			   
			   
			   
			    <!--
				  
				  <td>{{ investment.dateInvested }}</td>
                  <td>R {{ investment.amountInvested }}</td>
                  <td>{{ investment.package }} Months</td>
                  <td>{{ investment.dream }}</td>
                  <td>R {{ investment.amount }}</td>
                  <td>{{ investment.status }}</td>
                  <td>{{ investment.status }}</td>
				    <td><button type="button" class="btn btn-info" ng-click="Withdraw(investment)">Withdraw</button></td>
				  -->
			 </div>
		       <dir-pagination-controls max-size="5"
		                                 direction-links="true"
		                                 boundary-links="true">
		       </dir-pagination-controls>
      </div>
   </div>

   </h3>
</div>
<!-- //stats -->
<?php
   require 'footer.php';
   ?>