import { RegisterService } from './../Register.service';
import { Router } from '@angular/router';
import { UserDataService } from './../../shared/services/user-data.service';
import { ResetUserService } from './../../shared/reset-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.component.html',
  styleUrls: ['./banking-details.component.css']
})
export class BankingDetailsComponent implements OnInit {
  user:any;
  bankname: string;
  branch: string;
  accountnumber: string;
  isValid :boolean;
  message : string;
  accountType: string;
  banks = ['Absa',
  'African Bank Limited',
  'Capitec Bank',
  'First National Bank',
  'Bidvest Bank Limited',
  'Nedbank Limited',
  'Imperial Bank South Africa',
  'Investec Bank Limited',
  'Sasfin Bank Limited'
  ]
  accounts   = ['Cheque', 'Savings']
  constructor(private http: RegisterService,private router:Router, private userDataService: UserDataService, private resetUserService:ResetUserService) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
  }

  Save(){
    this.isValid = true;
    this.message = undefined;
    if(this.bankname == undefined||this.accountType == undefined||this.accountnumber == undefined || this.branch == undefined|| this.accountType== undefined){
      this.isValid = false;
      this.message = "Please fill in the form completely";
      return;
    }
    if(this.isValid){
      let data = {
        bankname: this.bankname,
        branch: this.branch,
        accountType: this.accountType,
        accountnumber: this.accountnumber,
        email : this.user.email
      }
      this.http.updateBankingDetails(data).subscribe(response=>{
        if(response === 1){
          alert("Bank Details Successfully Saved");
          this.resetUserService.resurtUser(data.email,this.user.password)
            .subscribe((res)=>{
              this.userDataService.saveUser(res);
              this.router.navigate(['user-dashboard']);  
            });
        }
      })
    }
  }
}
