import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserDataService } from "../shared/services/user-data.service";
import { ResetUserService } from "../shared/reset-user.service";
import { DreamDetailsService } from '../dream-detail/dream-details.service';
@Component({
  selector: 'app-cash-out-dream',
  templateUrl: './cash-out-dream.component.html',
  styleUrls: ['./cash-out-dream.component.css']
})
export class CashOutDreamComponent implements OnInit {

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
      }
    });
  }

  Confirm(){
    let data = {
      amount: this.dream.expectedAmount,
      investmentID: this.dream.id,
      pendingbalance:this.dream.expectedAmount,
      status:'pending',
      balance:this.dream.expectedAmount,
      notes:this.dream.dream
      }
      this.dreamDetailsService.WithDrawDream(data)
      .subscribe((data)=>{
        console.log(this.user);
        let email = this.user.email;
        let password = this.user.password;

        this.resetUserService.resurtUser(email,password)
        .subscribe((res)=>{
          if(res.name){
            this.userDataService.saveUser(res);  
            alert("Withdrwal was created successfully, we will notify you as soon as you amount is allocated");   
            this.router.navigate(["user-dashboard"]);
   
          }
        });
      })

  }

}
