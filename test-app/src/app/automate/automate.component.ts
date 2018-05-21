import { Component, OnInit } from "@angular/core";
import { AutomateService } from "./automate.service";
import { IS_LOCAL } from "../shared/config";
import { LocationStrategy } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-automate",
  templateUrl: "./automate.component.html",
  styleUrls: ["./automate.component.css"]
})
export class AutomateComponent implements OnInit {
  status: string;
  investments: any[];
  constructor(
    private AutomateService: AutomateService,
    private router: Router,
    private location: LocationStrategy
  ) {}

  ngOnInit() {
    this.MakeDreamsActive();
    this.MakeDreamsMature();
    this.CheckURL
  }
  MakeDreamsMature() {
    this.AutomateService.MakeDreamsMature().subscribe(data => {
      console.log(data);
    });
  }
  MakeDreamsActive() {
    this.AutomateService.makeDreamActive().subscribe(data => {
      console.log("to active", data);
    });
  }

  CheckURL() {
    if (!IS_LOCAL) {
      let baseUrlMain = (<any>this.location)._platformLocation.location.href;
      const BASE_URLMAIN_SECURE = "https://www.funderslife.com";
      var res = baseUrlMain.substring(0, 27);
      if (res != BASE_URLMAIN_SECURE) {
        alert("site not secure");
        this.router.navigate([BASE_URLMAIN_SECURE]);
      }
    }
  }
}
