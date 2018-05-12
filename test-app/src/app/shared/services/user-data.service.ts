import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
user:any;
constructor() { }
saveUser(user:any):Observable<any>{
  return  this.user = user;
}
getUser(): any{
<<<<<<< HEAD
return this.user;
=======
    if(this.user){
        return this.user;
    }
    if(JSON.parse(localStorage.getItem('user'))){
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    }
    return null;
>>>>>>> b751673a88f41b3366b10e5701011c821873f81d
}
}
