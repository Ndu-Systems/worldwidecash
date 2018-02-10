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
        <div class="container" ng-controller="adminDashController" ng-init="GetCounts()">
            <h3 class="tittle">Hello {{name}},<font color="orange">ADMIN!</font> </h3>
            <br>


			 <div class="panel panel-default">
                <div class="panel-heading">
                   
                <div class="panel-body">
                 
                            <h4 class="wait">{{wait}} </h4>
                         
							
							<div class="col-lg-3 col-md-6"  ng-repeat="gh in counts | filter:searchGH">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-cubes"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">{{gh.value}}</div>
                                    <div>{{gh.key}}</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer"   ng-click="More(gh)">>
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
							

                </div>
            </div>
			
	

        </div>
		</div>
		</div>
        <!-- //stats -->
        <?php
require 'footer.php';
?>