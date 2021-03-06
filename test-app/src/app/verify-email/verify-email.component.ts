import { Email } from "./../Models/Email";
import { ResetUserService } from "./../shared/reset-user.service";
import { UserDataService } from "./../shared/services/user-data.service";
import { Component, OnInit } from "@angular/core";
import { VerifyEmailService } from "./verify-email.service";
import { Router } from "@angular/router";
import { EmailService } from "../shared/services/email.service";
import { WEB_HOST } from "../shared/config";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.css"]
})
export class VerifyEmailComponent implements OnInit {
  name: string;
  user: any;
  dbcode: number;
  user_code: number;
  error: string;
  constructor(
    private UserDataService: UserDataService,
    private verifyEmailService: VerifyEmailService,
    private router: Router,
    private resetUserService: ResetUserService,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.user = this.UserDataService.getUser();
    this.name = this.user.name;
    this.dbcode = parseInt(this.user.code);
  }

  Verify() {
    this.error = "";
    let mylink = WEB_HOST;
    if (this.dbcode === this.user_code) {
      let data = {
        userID: this.user.id,
        code: this.dbcode,
        mylink: mylink
      };
      this.verifyEmailService.verifyEmail(data).subscribe(res => {
        if (res) {
          // send user link
          let email = {
            emailFrom: "welcome@funderslife.com",
            to: this.user.email,
            name: this.user.name,
            subject: "Welcome to funders life-Welcome pack",
            msg: `
             Your email address was verified successfully, Here is your link  ${res}. To get bonuses share this link and get 10% bonus on there first active dream!";
          `
          };
          this.emailService.sendEmail(email).subscribe(data => {
            alert("Thank you, your email was verified successfully");
            this.user.isEmailVerified = 1;
            this.UserDataService.saveUser(this.user);
            this.router.navigate(["user-dashboard"]);
          });
        }
      });
    } else {
      this.error = "Code does not match!";
    }
  }

  Resend() {
    //Code genarate
    this.dbcode = Math.floor(4000 * (Math.random() + 1));
    let email = {
      emailFrom: "accounts@funderslife.com",
      to: this.user.email,
      name: this.user.name,
      subject: "Email Verification- resend code",
      msg: `Welcome to Funders Life,Your verification code is ${this.dbcode}`
    };
    this.emailService.sendEmail(email).subscribe(data => {
      console.log("Email sent");
      alert("The code was sent ,please check your emails");
    });
  }
}
