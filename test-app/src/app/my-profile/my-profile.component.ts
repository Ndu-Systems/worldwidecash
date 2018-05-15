import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  mylink: any;
  isValid: boolean;
  message: any;
  keeperLS: string[];
  countries: string[];
  accountTypes: string[];
  user: any;
  banks: string[];
  city: any;
  id: number;
  country: any;
  address: any;
  isAkeeper: any;
  branch: any;
  accountType: any;
  accountnumber: number;
  bankname: any;
  cell: number;
  code: any;
  email: any;
  name: any;
  constructor(private UserDataService:UserDataService, private ProfileService:ProfileService) { }

  ngOnInit() {
    this.user =this.UserDataService.getUser();
    console.log(this.user)
   this.name = this.user.name;
   this.email = this.user.email;
   this.code = this.user.code;
   this.mylink = this.user.mylink;
   this.cell = parseFloat(this.user.cell);

   this.bankname = this.user.bankname;
   this.accountnumber = parseFloat(this.user.accountnumber);
   this.accountType = this.user.accountType;
   this.branch = this.user.branch;
   this.isAkeeper = this.user.isAkeeper;
   this.address = this.user.address;
   this.id = parseFloat(this.user.idnum);
   this.country = this.user.country;
   this.city = this.user.city;
    
   this.banks = ['Absa',
        'African Bank Limited',
        'Capitec Bank',
        'First National Bank',
        'Bidvest Bank Limited',
        'Nedbank Limited',
        'Imperial Bank South Africa',
        'Investec Bank Limited',
        'Sasfin Bank Limited'
    ];

   this.accountTypes = ['Cheque', 'Savings'];
   this.countries = ['South Africa', 'Unite States']
   this.keeperLS = ['Yes', 'No'];

  }
  Save () {
    this.message = undefined;
    this.isValid = true;
     //				bankname, accountnumber
     var bankname =this.bankname;
     var accountnumber =this.accountnumber;
     var accountType =this.accountType;
     var branch =this.branch;


     var data = {
         bankname: bankname,
         accountnumber: accountnumber,
         accountType: accountType,
         branch: branch,
         email:this.email,
         isAkeeper:this.isAkeeper

     };
     if (bankname == undefined || accountnumber == undefined || accountType == undefined || branch == undefined) {
        this.isValid = false;
        this.message = "Please fill in the form completely";
         return;
     }

     if (this.isValid) {
      this.ProfileService.updateProfile(data).subscribe((data)=>{alert(data)})

     } else {
        this.message = "Please make sure that all required fields are NOT empty"
     }
 };
}

