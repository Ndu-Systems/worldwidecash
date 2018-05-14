import { Component, OnInit } from "@angular/core";
import { AutomateService } from "./automate.service";

@Component({
  selector: "app-automate",
  templateUrl: "./automate.component.html",
  styleUrls: ["./automate.component.css"]
})
export class AutomateComponent implements OnInit {
  status: string;
  investments: any[];
  constructor(private AutomateService: AutomateService) {}

  ngOnInit() {
    this.MakeDreamsActive();
  }
  MakeDreamsActive() {
    let investment_To_activate_LS = [];
    this.AutomateService.getAllDreams().subscribe(response => {
      if (response) {
        var dreams = response.data.filter(x => x.numberOfKeepers > 0);
        for (let dream of dreams) {
          let isPaid = true;
          for (let keeper of dream.keepers) {
            if (keeper.status !== "confirmed") {
              isPaid = false;
            }
          }
          if (isPaid) {
            let status = "active";
            if (dream.dream == "Keep Funds Allocated to another dreamer") {
              status = "active_from_kept";
            }
            var data = {
              id: dream.id,
              name: dream.name,
              amount: dream.amountInvested,
              email: dream.email,
              userID: dream.userID,
              status: status
            };
            // call service
            console.log("data", data);

            this.AutomateService.makeDreamActive(data).subscribe(r=> console.log(r));
          }
        }
      }
    });
  }
  AreAllStatusConfrimed(array) {}
}
