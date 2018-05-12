import { Router } from '@angular/router';
import { RegisterService } from './../Register.service';
import { UserDataService } from './../../shared/services/user-data.service';
import { ResetUserService } from './../../shared/reset-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  user: any;
  cell: string;
  address: string;
  idnum :string;
  country:string;
  city   :string;  
  isValid: boolean;
  message: any;
  countries =[
    "South Africa",
    "America"
  ]
  constructor(private http: RegisterService,private router:Router, private userDataService: UserDataService, private resetUserService:ResetUserService) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
  }
 
Save(){
  debugger
  this.isValid = true;
  this.message = undefined;
      if(this.cell == undefined || this.address == undefined || this.idnum == undefined || this.country == undefined || this.city == undefined) {
        this.isValid = false;
        this.message = "Please fill in the form completely";
        return;
    }
    if(this.isValid){
      let data = {
        cell: this.cell,
        address: this.country,
        idnum :this.idnum,
        country:this.country,
        city   :this.city, 
        email : this.user.email
      }
      
      this.http.updatePersonalInformation(data).subscribe(response=>{
        if(response===1){
          alert("Personal Data Saved on registration");
          this.resetUserService.resurtUser(data.email,this.user.password)
            .subscribe((res)=>{
              this.userDataService.saveUser(res);
              this.router.navigate(['banking-details']);  
            });
        }
      })

    }
}


}
