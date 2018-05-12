import { EmailService } from './../shared/services/email.service';
import { Component, OnInit } from "@angular/core";
import { DreamDetailsService } from "../dream-detail/dream-details.service";
import { UploadService } from "./upload.service";
import { GetImagePath } from "../shared/config";
import { UserDataService } from "../shared/services/user-data.service";
import { Email } from "../Models/Email";
import { Router } from "@angular/router";

@Component({
  selector: "app-proof-of-payment",
  templateUrl: "./proof-of-payment.component.html",
  styleUrls: ["./proof-of-payment.component.css"]
})
export class ProofOfPaymentComponent implements OnInit {
  dreamId: number;
  file: File;
  keeper: any;
  message: string;
  success: string;
  thisUser: any;
  constructor(
    private dreamDetailsService: DreamDetailsService,
    private uploadService: UploadService,
    private userDataService: UserDataService,
    private emailService: EmailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getKeeper();
  }
  getKeeper() {
    this.keeper = this.dreamDetailsService.getKeeper();
    this.thisUser = this.userDataService.getUser();
    this.dreamId = this.dreamDetailsService.getDreamID();
  }
  filesChanged(files) {
    this.file = <File>files[0];
  }
  uplaodFile() {
    if (!this.file) {
      this.message = "Please select the files!";
      return false;
    }
    this.uploadService.uploadFile(this.file).subscribe(response => {
      let doc = GetImagePath(response.trim());
      if (!this.keeper) {
        this.keeper = this.getKeeper();
      }
      let data = {
        doc: doc,
        keeperID: this.keeper.id,
        senderName: this.thisUser.name,
        toEmail: this.keeper.user.email,
        amount: this.keeper.amount,
        toName: this.keeper.user.name
      };
      //save pop to db
      this.dreamDetailsService.SavePOPtoDB(data).subscribe(res => {
        if (res) {
          // send email
          let msg =
            this.thisUser.name +
            " Uploaded the proof of payment , please check your account balance and confirm the payment!";
          let emailBody: Email = {
            emailFrom: "noreply@funderslife.com",
            to: this.keeper.user.email,
            name: this.keeper.user.name,
            subject: "Proof of payment",
            msg: msg
          };
          //this.emailService.sendEmail(emailBody);
          alert(
            "Thanks for your Proof of payment, we will verify and let you know as soon as possible."
          );
          this.router.navigate([`dream/${this.dreamId}`]);
          // thanks
          // back to dream details
        }
      });
    });
  }
}
