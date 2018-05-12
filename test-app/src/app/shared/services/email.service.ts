import { Email } from './../../Models/Email';
import { EMAIL } from './../config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

    API_PATH = EMAIL;
    constructor(private httpClient:HttpClient ) { }
  
    sendEmail(email):Observable<any>{
         return this.httpClient.post(this.API_PATH, email);
    }

}
