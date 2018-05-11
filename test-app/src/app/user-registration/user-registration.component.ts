import { RegisterService } from './Register.service';
import { Component, OnInit } from '@angular/core';
import { Register } from '../Models/Register';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
 

  register: Register;
  constructor(private regisitserService: RegisterService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm): any {
     if(form!= null)
      form.reset();

      this.register = {
        id : '',
        name :'',
        surname : '',
        email : '',
        password : '',
        cell: '',
        bankname: '',
        accountType: '',
        branch:'',
        status: ''
      }
  }

  OnSubmit(form: NgForm){
    this.regisitserService.registerUser(form.value).subscribe((data: any)=>{
      if(data.Succeed == true){
        this.resetForm(form);
        this.router.navigate(['']);        
      }
      else{
        this.router.navigate(['Get-Started']);   
      }
    })
  }

}
