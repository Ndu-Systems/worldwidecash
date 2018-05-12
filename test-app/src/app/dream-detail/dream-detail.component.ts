import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DreamDetailsService } from "./dream-details.service";
import { UserDataService } from "../shared/services/user-data.service";
import { ResetUserService } from "../shared/reset-user.service";

@Component({
  selector: "app-dream-detail",
  templateUrl: "./dream-detail.component.html",
  styleUrls: ["./dream-detail.component.css"]
})
export class DreamDetailComponent implements OnInit {
  id: number;
  dream: any;
  user:any;
  constructor(
    private route: ActivatedRoute,
    private dreamDetailsService: DreamDetailsService,
    private router: Router,
    private userDataService: UserDataService,
    private resetUserService:ResetUserService,
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getDreamDetails(this.id);
    this.user = this.userDataService.getUser();

  }
  getDreamDetails(id) {
    this.dreamDetailsService.getDreamDetails(id).subscribe(response => {
      if (response) {
        this.dream = response.data[0];
        this.ChangeDreamToPiad();
      }
    });
  }
  UploadProofOfPayment(keeper) {
    this.dreamDetailsService.saveKeeper(keeper);
    this.dreamDetailsService.saveDreamID(this.dream.id);
    this.router.navigate(["proof-of-payment"]);
  }
  ChangeDreamToPiad() {
    // check for pending keeper for alloacted dream
    if (this.dream.status === "allocated") {
      let numberOfPendings = 0;
      for (let keeper of this.dream.keepers.keepers) {
        let status = keeper.status;
        if (status == "pending") {
          numberOfPendings++;
        }
      }

      if (numberOfPendings == 0) {
        // All dreams are paid  - change dream status to paid
        let data = {
          id: parseInt(this.dream.id)
        };

        this.dreamDetailsService.updateDreamToPaid(data).subscribe(res => {
          if (res) {
            alert("Dream status changed to : Paid");
            // Reload User
            let email = this.user.email;
            let password = this.user.password;
            this.resetUserService.resurtUser(email,password)
            .subscribe((res)=>{
              if(res.name){
                this.userDataService.saveUser(res);          
              }
            });
          } else {
            if (this.dream.status == "allocated") {
              //  CountDownTimer($scope.dream.timeAllocated, "timeCountDown");
            }
          }
        });
      }
    }
  }
}
