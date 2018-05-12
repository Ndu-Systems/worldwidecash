import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/config';

@Injectable()
export class BonusService {
    API_PATH = API_URL;

    constructor(private httpClient:HttpClient ) { }

    getBonuses(userID, status):Observable<any>{
         return this.httpClient.get<any>(`${this.API_PATH}/Invest/GetBonuses.php?userID=${userID}&status=${status}`);
    }

}
