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
return this.user;
 
}
}
