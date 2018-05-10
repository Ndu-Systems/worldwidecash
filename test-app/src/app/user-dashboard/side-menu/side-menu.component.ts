import { Component, OnInit, Input } from '@angular/core';
import { SideMenu } from '../../Models/SideMenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
@Input() sidemenu:SideMenu;
  constructor() { }

  ngOnInit() {
  }

}
