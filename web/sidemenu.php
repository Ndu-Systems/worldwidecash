
  <div class="col-sm-3 sidemenu" style="height:auto" ng-controller="sideMenu" ng-init="GetSideItems()">
  
    
    <ul class="list-group">
   <li class="list-group-item">
   <h1 class="usericon">
        <span class="glyphicon glyphicon-user"></span>
    </h1>
    <h1 class="username">
        Hello {{name}}<br>
          <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">My Link</button>
          <a href="My-Profile"> <button type="button" class="btn btn-info">My Profile</button></a>

    </h1>

    <div class="container">
    <!-- Trigger the modal with a button -->

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">My Link</h4>
                    </div>
                    <div class="modal-body">
                                <p>Share this link and get bonuses!</p>
                      <p><b><font color=green>{{mylink}}</font></b></p>
                    </div>
                        <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
      
      </div>
    </div>
    
  </div>
   </li>

        <li class="list-group-item" ng-show="showTime"><a href=""><h4 style="color:red"><span class="glyphicon glyphicon-time"></span> {{timeleft}}</h4></a></li>
        <li class="list-group-item"><a href="My-Referrals"><span class="glyphicon glyphicon-user"></span><span class="glyphicon glyphicon-user"></span> My-Referrals <span class="badge">{{ members }}</span></a></li>
        <li class="list-group-item"><a href="My-Bonuses"><span class="glyphicon glyphicon-credit-card"></span> Bonuses <span class="badge"> R {{ bonus }}</span></a></li>
        <li class="list-group-item"><a href="My-Pending-Withdraw"><span class="glyphicon glyphicon-credit-card"></span> Pending Withdraw <span class="badge">  {{ pending }}</span></a></li>
          <!--  <li class="list-group-item"><a href="Amount-You-Can-Keep"><span class="glyphicon glyphicon-apple"></span> Amount you can keep <span class="badge"> R {{ keepableAmount }}</span></a></li>    -->
        <li class="list-group-item"><a href=""><span class="glyphicon glyphicon-apple"></span> Amount kept <span class="badge"> R {{ amountkept }}</span></a></li>
        <li  ng-show="showDonateLink" class="list-group-item"><a href="Give-Help"><span class="glyphicon glyphicon-heart-empty"></span> Create dream</a></li>
        <li class="list-group-item"><a href="Dashboard"><span class="glyphicon glyphicon-th"></span> Dashboard</a></li>
       <!--  <li class="list-group-item"><a href=""><span class="glyphicon glyphicon-th-list"></span> History</a></li> -->
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
                              <p class="time" style="color:white">Received: {{chat.timeSent}}</p>

                </div>
                <div  ng-if="chat.senderName != 'Admin'" class="sent">
                    {{chat.message}}
                              <p class="time">Sent: {{chat.timeSent}}</p>

                </div>
              </li>
        </p>
        </div>
              <li class="list-group-item">
                <textarea class="form-control"  id="txtMessageBody"  style="height: 40px; border-radius: 15px;" rows="5" ng-model="messageBody"></textarea>  
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-info" ng-click="Send()">Send</button>  
              </li>
          </ul>
        </div>
    </div>
  </div>

