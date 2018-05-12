import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
user:any;
constructor() { }
saveUser(user:any):Observable<any>{
    localStorage.setItem('user', JSON.stringify(user));
  return  this.user = user;
}
getUser(): any{
    if(this.user){
        return this.user;
    }
    if(JSON.parse(localStorage.getItem('user'))){
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    }
    return null;
}
}
