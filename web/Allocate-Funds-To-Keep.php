<?php
require 'head.php';
require 'nav3.php';
?>

    <div class="banner_bottom" style="padding:0">
        <div class="container" ng-controller="allocateFundsToKeepController">
          
			 <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 style="width:100%; text-align:center; padding:2%; color:green">{{name}}-( {{email}} ) can keep upto R {{amountkeepable}}</h4></div>
                <div class="panel-body">
				   <hr>
				 
				   <hr>
				   	<input type="number" class="myInput" ng-model="amount_requested_to_keep" placeholder="Enter amount upto R{{amountkeepable}}"/><br><br>
             <button type="button" class="btn btn-success" ng-click="Allocate()">Allocate Funds</button>
             <br><br>
             <h3 style="color:red">{{error}}</h3>

				 
                </div>
            </div>



        </div>
        <!-- //stats -->
        <?php
require 'footer.php';
?>