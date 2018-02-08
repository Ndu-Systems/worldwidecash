<div class="col-sm-3 sidemenu" ng-controller="sideMenu" ng-init="GetSideItems()">
   <h1 class="usericon">
      <span class="glyphicon glyphicon-user"></span>
   </h1>
   <h1 class="username">
      Hello {{name}}<br>
   </h1>
   <p>
   </p>
   <ul class="list-group">
      <li class="list-group-item"><a href=""><span class="glyphicon glyphicon-user"></span><span class="glyphicon glyphicon-user"></span> Members <span class="badge">{{ members }}</span></a></li>
      <li class="list-group-item"><a href=""><span class="glyphicon glyphicon-credit-card"></span> Bonuses <span class="badge"> R {{ bonus }}</span></a></li>
      <li class="list-group-item"><a href="Give-Help"><span class="glyphicon glyphicon-heart-empty"></span> Donate</a></li>
      <li class="list-group-item"><a href="Dashboard"><span class="glyphicon glyphicon-th"></span> Dashboard</a></li>
      <li class="list-group-item"><a href=""><span class="glyphicon glyphicon-th-list"></span> History</a></li>
      <li class="list-group-item"><a href="Logout"><span class="glyphicon glyphicon-off"></span> Logout</a></li>
   </ul>
   <div class="chats" >
   
   
   
   

<button data-toggle="collapse" data-target="#demo" class="btn btn-success"> <span class="glyphicon glyphicon-send" aria-hidden="true"></span> Live Support </button> <br>
 <div id="demo" class="collapse">
         <ul class="list-group" >
		 <div class="scrollable">
		 <p>
            <li class="list-group-item" ng-repeat="chat in chats" >
               <div ng-if="chat.senderName == 'Admin'" class="received">
                  {{chat.message}}
               </div>
               <div  ng-if="chat.senderName != 'Admin'" class="sent">
                  {{chat.message}}
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


<script>

</script>