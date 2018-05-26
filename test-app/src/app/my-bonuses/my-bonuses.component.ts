import { Component, OnInit } from "@angular/core";
import { BonusService } from "./bonus.service";
import { UserDataService } from "../shared/services/user-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-bonuses",
  templateUrl: "./my-bonuses.component.html",
  styleUrls: ["./my-bonuses.component.css"]
})
export class MyBonusesComponent implements OnInit {
  error: string;
  userID: number;
  bonuses: any;
  bonus:number;
  isBonus: boolean;

  constructor(private bonusService: BonusService,
    private userDataService:UserDataService, private router:Router) {}

  ngOnInit() {

    let user = this.userDataService.getUser();
    if (!user) {
      this.router.navigate(["unauthorized"]);
      return;
    }
    this.userID = user.id;
    this.bonus = user.bonus;
    this.getBonuses();
  }
  getBonuses() {
    this.bonusService.getBonuses(this.userID, "active").subscribe(data => {
      if(data){
        this.bonuses = data;
        this.isBonus = this.bonuses.length>0;
if(!this.isBonus){
  this.error = "You have no bonus at this time, share your link and get 10% bonus on their investment.s"
}
      }
    });
  }
}
