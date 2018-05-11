import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  user:any;
  constructor(private userDataService:UserDataService) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    alert(this.user.name);
  }

}
