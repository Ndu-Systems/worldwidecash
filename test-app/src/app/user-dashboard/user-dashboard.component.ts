import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user:any;
  constructor(private userDataService:UserDataService) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    alert(this.user.name);
  }

}
