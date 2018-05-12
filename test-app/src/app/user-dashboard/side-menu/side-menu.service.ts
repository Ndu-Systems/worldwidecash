import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SideMenuService {

    API_PATH = API_URL;
    withdrawals:any;
    constructor(private httpClient:HttpClient ) { }
  
    getWithdawals(id:number):Observable<any>{
         return this.httpClient.get<any>(`${this.API_PATH}/Invest/GetWithdralsForTheUser.php?id=${id}`);
    }
    saveWithdwals(data){
        this.withdrawals = data;
    }
    getWithdwals(){
        return this.withdrawals;
    }

}
