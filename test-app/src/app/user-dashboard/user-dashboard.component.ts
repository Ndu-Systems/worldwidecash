import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';
import { Dream } from '../Models/Dream';
import { SideMenu } from '../Models/SideMenu';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user:any;
  dreams: Dream[];
  sidemenu:SideMenu;
  constructor(private userDataService:UserDataService) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    console.log("service user",this.user);
    this.dreams =  this.user.dreams.data;
    this.sidemenu = {
      name: this.user.name,
      mylink:this.user.mylink,
      myrefferals : this.user.myrefferals,
      bonus : this.user.bonus,
      amountkept : this.user.amountkept,
    };

  }

}
