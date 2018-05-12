import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../user-dashboard/side-menu/side-menu.service';

@Component({
  selector: 'app-my-withdraws',
  templateUrl: './my-withdraws.component.html',
  styleUrls: ['./my-withdraws.component.css']
})
export class MyWithdrawsComponent implements OnInit {
  myWithdrals:any;
  constructor(private sideMenuService:SideMenuService) { }

  ngOnInit() {
    this.myWithdrals =   this.sideMenuService.getWithdwals();
    console.log("this.myWithdrals", this.myWithdrals)
  }

}
