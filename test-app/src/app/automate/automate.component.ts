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
    this.MakeDreamsMature();
  }
  MakeDreamsMature() {
    this.AutomateService.MakeDreamsMature().subscribe((data)=>{
      console.log(data);
    })
  }
  MakeDreamsActive() {
    this.AutomateService.makeDreamActive().subscribe((data)=>{
      console.log('to active',data);
    })
  }
}
