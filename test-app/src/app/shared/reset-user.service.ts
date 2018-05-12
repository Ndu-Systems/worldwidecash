import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { LoginServiceService } from '../user-login/login-service.service';
import { API_URL } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResetUserService {
API_PATH = API_URL;
constructor(private UserDataService:UserDataService,private httpClient:HttpClient) { }

resurtUser(email:string, password:string):Observable<any>{
    return this.httpClient.get<any>(`${this.API_PATH}/Account/LoginUser.php?email=${email}&password=${password}`);
}
}