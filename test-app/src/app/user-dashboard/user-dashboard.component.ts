import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../shared/services/user-data.service";
import { Dream } from "../Models/Dream";
import { SideMenu } from "../Models/SideMenu";
import { Router } from "@angular/router";
import { interval } from "rxjs/observable/interval";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  time: string;
  user: any;
  dreams: Dream[];
  sidemenu: SideMenu;
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (!this.user) {
      this.router.navigate(["unauthorized"]);
      return;
    }
    if(this.user.userstatus =='locked'){
      this.router.navigate(["user-locked"]);

    }
    this.CountDown();
    if (parseInt(this.user.isEmailVerified) === 0) {
      this.router.navigate(["verify-email"]);
    }
    this.dreams = this.user.dreams.data;
    this.sidemenu = {
      name: this.user.name,
      mylink: this.user.mylink,
      myrefferals: this.user.myrefferals,
      bonus: this.user.bonus,
      amountkept: this.user.amountkept
    };
  }
  copyLink(inputElement) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
  }

  CountDown() {
    if (this.user) {
      let dreams = this.user.dreams.data;
      if (!dreams) {
        return;
      }
      let allocated: any[] = dreams.filter(x => x.status == "allocated");
      if (allocated.length > 0) {
        let timeAllocated = allocated[0].timeAllocated;
        let countDownDate = new Date(timeAllocated).getTime();

        const timeinterval = interval(1000)
        .subscribe(data => {
          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          this.time =
            "Time remaining to make a payment: " +
            days +
            "d " +
            hours +
            "h " +
            minutes +
            "m " +
            seconds +
            "s ";

          // If the count down is finished, write some text
          if (distance < 0) {
            this.time = "Time over"
            return false;
          }

          //console.log("allocated ..", countDownDate);
        });
      }
    }
  }

  
}
