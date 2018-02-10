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
        <div class="container" ng-controller="chatController" ng-init="GetChats">
            <br>

			 <div class="panel panel-default">
                <div class="panel-heading">      <div class="panel-heading">  <h3 style="width:100%; text-align:center; padding:2%; color:green"> Chats</h3></div>
</div>
                   
                <div class="panel-body">
				
				<div class="row">
				  <div class="col-sm-4">
				  
				     <table class="table">
                        <thead>
                            <tr>

                                <th></th>
                               
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <h4 class="wait">{{wait}} </h4>
                            <tr ng-repeat="chat in chats | filter:searchGH">
                                <td ng-click="OpenChats(chat)">
								 <p  ng-if="chat.status == 'unread'" > <b>{{ chat.senderName }}</b></p>
								 <p  ng-if="chat.status == 'read'" >{{ chat.senderName }}</p>
									
								</td>
                               
                            </tr>
                        </tbody>
                    </table>
				  </div>
				  
				  
				  <div class="col-sm-8">
                  <ul class="list-group" >
				   <div class="scrollable">
		 <p>
            <li class="list-group-item" ng-repeat="mess in messages" >
			
               <div ng-if="mess.senderName == 'Admin'" class="sent">
                  {{mess.message}}
				    <p class="time" >Sent: {{mess.timeSent}}</p>
               </div>
               <div  ng-if="mess.senderName != 'Admin'" class="received">
                  {{mess.message}}
				    <p class="time" style="color:white">Received: {{mess.timeSent}}</p>
               </div>
            </li>
			</p>
			</div>
            <li class="list-group-item">
               <textarea class="form-control" style="height: 40px; border-radius: 15px;" rows="5" ng-model="messageBody"></textarea>  
            </li>
            <li class="list-group-item">
               <button type="button" class="btn btn-info" ng-click="Send()">Send</button>  
            </li>
         </ul>
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