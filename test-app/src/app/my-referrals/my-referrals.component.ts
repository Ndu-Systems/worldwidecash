import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-my-referrals',
  templateUrl: './my-referrals.component.html',
  styleUrls: ['./my-referrals.component.css']
})
export class MyReferralsComponent implements OnInit {
users:any;
  constructor(private userDataService:UserDataService) { }

  ngOnInit() {
    this.getMyRefferals();
  }
getMyRefferals(){
let user = this.userDataService.getUser();
this.users = user.myrefferalsLS.data;
}
}
