import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../shared/config';
 
 

@Injectable()
export class RegisterService {
url: string = API_URL;
 
constructor(private http: HttpClient) { }

    registerUser(model):Observable<any>{
        console.log(model);
    return this.http.post(`${this.url}/Account/Reg.php`,model);
    }

    updatePersonalInformation(model):Observable<any>{
        return this.http.post(`${this.url}/Account/UpdatePersonalInfo.php`,model);
    }

    updateBankingDetails(model):Observable<any>{
        return this.http.post(`${this.url}/Account/UpdateBankingInfo.php`,model);
    }
}
