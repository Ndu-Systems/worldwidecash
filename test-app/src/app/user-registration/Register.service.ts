import { Register } from './../Models/Register';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
 

@Injectable()
export class RegisterService {
readonly rootUrl = 'http://localhost:8080/worldwidecash/api';
 
constructor(private http: HttpClient) { }

registerUser(reg: Register){
    const body: Register = {
        id : reg.id,
        name : reg.name,
        surname : reg.surname,
        email : reg.email,
        password : reg.password, 
        cell: '',
        bankname: '',
        accountType: '',
        branch:'',
        status: 'active'       
    }
    return this.http.post(this.rootUrl + '/Reg.php', body);
}

}
