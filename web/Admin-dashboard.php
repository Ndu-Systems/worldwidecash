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
                    <table class="table table-striped">
                        <thead>
                            <tr>

                                <th></th>
                                <th></th>
                             
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <h4 class="wait">{{wait}} </h4>
                            <tr ng-repeat="gh in counts | filter:searchGH">
                                <td>{{ gh.key }}</td>
                                <td><span class="badge">{{ gh.value }}</span></td>
                               
                                <td>
                                    <button type="button" class="btn btn-primary" ng-click="More(gh)">More</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
			
	

        </div>
		</div>
		</div>
        <!-- //stats -->
        <?php
require 'footer.php';
?>