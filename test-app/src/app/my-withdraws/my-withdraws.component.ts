import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../user-dashboard/side-menu/side-menu.service';

@Component({
  selector: 'app-my-withdraws',
  templateUrl: './my-withdraws.component.html',
  styleUrls: ['./my-withdraws.component.css']
})
export class MyWithdrawsComponent implements OnInit {
  myWithdrals:any;
  error:string;
  constructor(private sideMenuService:SideMenuService, private router:Router) { }

  ngOnInit() {
    this.myWithdrals =   this.sideMenuService.getWithdwals();
    if (!this.myWithdrals) {
      this.router.navigate(["unauthorized"]);
      return;
    }
    console.log("this.myWithdrals", this.myWithdrals)
  }

}
