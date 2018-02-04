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
  <li class="list-group-item"><a href="Members"><span class="glyphicon glyphicon-user"></span><span class="glyphicon glyphicon-user"></span> Members <span class="badge">{{ members }}</span></a></li>
  <li class="list-group-item"><a href="Bonuses"><span class="glyphicon glyphicon-credit-card"></span> Bonuses <span class="badge"> R {{ bonus }}</span></a></li>
  <li class="list-group-item"><a href="Give-Help"><span class="glyphicon glyphicon-heart-empty"></span> Donate</a></li>
  <li class="list-group-item"><a href="Dashboard"><span class="glyphicon glyphicon-th"></span> Dashboard</a></li>
  <li class="list-group-item"><a href="History"><span class="glyphicon glyphicon-th-list"></span> History</a></li>
  <li class="list-group-item"><a href="Logout"><span class="glyphicon glyphicon-off"></span> Logout</a></li>
</ul>
</div>