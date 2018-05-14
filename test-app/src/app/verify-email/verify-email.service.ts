import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../shared/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VerifyEmailService {

    API_PATH = API_URL;
    constructor(private httpClient:HttpClient ) { }
  
    verifyEmail(data):Observable<any>{
         return this.httpClient.post(`${this.API_PATH}/Account/VerifyEmail.php`,data);
    }

}
