import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-my-referrals',
  templateUrl: './my-referrals.component.html',
  styleUrls: ['./my-referrals.component.css']
})
export class MyReferralsComponent implements OnInit {
users:any;
error:string;
  constructor(private userDataService:UserDataService, private router:Router) { }

  ngOnInit() {
    this.getMyRefferals();
  }
getMyRefferals(){
let user = this.userDataService.getUser();
if (!user) {
  this.router.navigate(["unauthorized"]);
  return;
}
this.users = user.myrefferalsLS.data;
}
}
