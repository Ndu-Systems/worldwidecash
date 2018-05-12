import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dream-detail",
  templateUrl: "./dream-detail.component.html",
  styleUrls: ["./dream-detail.component.css"]
})
export class DreamDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
  }
}
