import { Component, OnInit } from "@angular/core";
import { BonusService } from "./bonus.service";
import { UserDataService } from "../shared/services/user-data.service";

@Component({
  selector: "app-my-bonuses",
  templateUrl: "./my-bonuses.component.html",
  styleUrls: ["./my-bonuses.component.css"]
})
export class MyBonusesComponent implements OnInit {
  userID: number;
  bonuses: any;
  bonus:number;
  constructor(private bonusService: BonusService,
    private userDataService:UserDataService) {}

  ngOnInit() {

    let user = this.userDataService.getUser();
    this.userID = user.id;
    this.bonus = user.bonus;
    this.getBonuses();
  }
  getBonuses() {
    this.bonusService.getBonuses(this.userID, "active").subscribe(data => {
      if(data){
        this.bonuses = data;
      }
    });
  }
}
