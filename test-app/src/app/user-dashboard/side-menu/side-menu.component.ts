import { Component, OnInit, Input } from "@angular/core";
import { SideMenu } from "../../Models/SideMenu";
import { SideMenuService } from "./side-menu.service";
import { UserDataService } from "../../shared/services/user-data.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.css"]
})
export class SideMenuComponent implements OnInit {
  @Input() sidemenu: SideMenu;
  myWithdrawals = 0;
  user:any;
  constructor(
    private sideMenuService: SideMenuService,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if(this.user){
      this.getWithdawals();

    }
  }
  getWithdawals() {
   
    this.sideMenuService.getWithdawals(this.user.id).subscribe(response => {
      console.log(response)
      if (response) {
        let dreams = response.data.filter(x=>x.hasWithdrawals>0);
        this.myWithdrawals = dreams.length;
       this.sideMenuService.saveWithdwals(dreams);
       console.log("Withdrals", dreams)

      } 
    });
  }
}
