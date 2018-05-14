import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userData:UserDataService) { }

  ngOnInit() {
    this.userData.saveUser(null);
  }

}
