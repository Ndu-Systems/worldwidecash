import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
user:any;
constructor() { }
saveUser(user:any){
    this.user = user;
}
getUser(): any{
    return this.user;
}
}
