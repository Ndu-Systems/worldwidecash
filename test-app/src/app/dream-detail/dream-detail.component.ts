import { Component, OnInit } from "@angular/core";
import { ActivatedRoute ,Router} from "@angular/router";
import { DreamDetailsService } from "./dream-details.service";

@Component({
  selector: "app-dream-detail",
  templateUrl: "./dream-detail.component.html",
  styleUrls: ["./dream-detail.component.css"]
})
export class DreamDetailComponent implements OnInit {
  id: number;
  dream:any;
  constructor(
    private route: ActivatedRoute,
    private dreamDetailsService: DreamDetailsService,
    private router : Router
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getDreamDetails(this.id);
  }
  getDreamDetails(id) {
    this.dreamDetailsService.getDreamDetails(id)
    .subscribe((response)=>{
      if(response){
        this.dream = response.data[0];
      }
    })
  }
  UploadProofOfPayment(keeper){
   this.dreamDetailsService.saveKeeper(keeper);
   this.router.navigate(['proof-of-payment']);
  }
}
