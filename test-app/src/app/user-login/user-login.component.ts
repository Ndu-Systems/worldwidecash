import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email = '';
  password ='';
  message='';
  constructor(private loginServiceService:LoginServiceService, private router:Router,private userDataService:UserDataService) { }

  ngOnInit() {
  }

  Login(){
  this.loginServiceService.loginUser(this.email, this.password)
  .subscribe((data)=>{
    if(data.name){
      this.userDataService.saveUser(data);
      this.router.navigate(['user-dashboard']);

    }else{
      this.message = "Oops! Your user name or password is incorrect please CHECK and try again.";
    }
  })
  }

}
