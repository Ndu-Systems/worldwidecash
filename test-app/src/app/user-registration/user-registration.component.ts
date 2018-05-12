import { Email } from './../Models/Email';
import { RegisterService } from './Register.service';
import { Component, OnInit } from '@angular/core';
import { Register } from '../Models/Register';
import { NgForm } from '@angular/forms';
import { UserDataService } from "../shared/services/user-data.service";
import { ResetUserService } from "../shared/reset-user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  // register: Register;
  name:string;
  surname:string;
  email:string; 
  password:string;      
  message: any;
  isValid: boolean;
  passwordConfirm: string;

  constructor(private http: RegisterService,private router:Router, private userDataService: UserDataService, private resetUserService:ResetUserService) { }

  ngOnInit() {}

  Join(){
    debugger
    this.isValid = true;
    if (this.name == undefined || this.surname == undefined) {
      this.isValid = false;
      this.message = "Please your name and surname";
      return;
    }
    if (this.email == undefined) {
      this.isValid = false;
      this.message = "Please enter a valid email address!";
      return;
    }
    if (this.password == undefined) {
      this.isValid = false;
      this.message = "Please create your password!";
      return;
    }
    if (this.password.length < 8) {
      this.isValid = false;
      this.message = "Your password has to be at least 8 characters long.";
      return;
    }
    if (this.passwordConfirm == undefined) {
      this.isValid = false;
      this.message = "Please confirm your password!";
      return;
    }
    if (this.password !== this.passwordConfirm) {
      this.isValid = false;
      this.message = "Password does not match!";
      return;
    }
    if(this.isValid){
      let data = {
        name : this.name,
        surname:this.surname,
        email:this.email, 
        password:this.password   
      };
      debugger
      this.http.registerUser(data).subscribe(response =>{
        if(response===1){
          alert("User Saved");
          this.resetUserService.resurtUser(data.email,data.password)
            .subscribe((res)=>{
              this.userDataService.saveUser(res);
              this.router.navigate(['personal-information']);  
            });
        }
        else{
          this.message = response;
        }
      });

    }
    

    

    
  }

}
