import { EmailService } from './../shared/services/email.service';
import { Component, OnInit } from "@angular/core";
import { DreamService } from "./Dream.service";
import { UserDataService } from "../shared/services/user-data.service";
import { ResetUserService } from "../shared/reset-user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-dream",
  templateUrl: "./create-dream.component.html",
  styleUrls: ["./create-dream.component.css"]
})
export class CreateDreamComponent implements OnInit {
  user:any;
  message: any;
  isValid: boolean;
  dream: string;
  amount: number;
  peroid: number;
  packeges = [
    200,
    300,
    400,
    500,
    1000,
    1500,
    2000,
    3000,
    5000,
    8000,
    10000,
    15000,
    20000,
    30000,
    40000,
    50000
  ];
  peroids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor(private router:Router, private http: DreamService, private userDataService: UserDataService, private resetUserService:ResetUserService,private emailService:EmailService) {}

  ngOnInit() {
    this.user =this.userDataService.getUser();
  }
  Donate() {
    this.message = undefined;
    this.isValid = true;
    //bankname, accountnumber
    let dream = this.dream;
    let amount = this.amount;
    let peroid = this.peroid;
    let user = this.userDataService.getUser();
    let isAkeeper = user.isAkeeper;
    let userID = user.id;

    let data = {
      dream: dream,
      amount: amount,
      peroid: peroid,
      userID: userID,
      isAkeeper: isAkeeper
    };
    if (peroid == undefined || amount == undefined || dream == undefined) {
      this.isValid = false;
      this.message = "Please fill in the form completely";
      return;
    }

    if (this.isValid) {
      this.http.createDream(data).subscribe(response => {
        if(response===1){
          let email = user.email;
          let password = user.password;
          this.resetUserService.resurtUser(email,password)
          .subscribe((res)=>{
            if(res.name){
              this.userDataService.saveUser(res);
              alert('Dream was created succefully');
              
              let email={
                emailFrom:"welcome@funderslife.com",
                to:this.user.email,
                name:this.user.name,
                subject:"Email Verification",
                msg: `Your dream was created successfully, Please wait for a member to be assigned to you.
                `
              }
              this.emailService.sendEmail(email)
              .subscribe((data)=>{
                console.log("Email sent");
              })
              this.router.navigate(['user-dashboard']);        
            }
          });         
        }
      });
    } else {
      this.message = "Please make sure that all required fields are NOT empty";
    }
  }
}
