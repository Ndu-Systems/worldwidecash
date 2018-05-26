import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { API_URL } from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {
user:any;
url: string = API_URL;
constructor(private http:HttpClient) { }
saveUser(user:any):Observable<any>{
  return  this.user = user;
}
getUser(): any{
return this.user;
 
}
lockUser(user):Observable<any>{
  return this.http.post(`${this.url}/Invest/Invest.php`,user);

}
}
