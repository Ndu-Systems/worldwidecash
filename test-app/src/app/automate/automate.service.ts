import { Injectable } from '@angular/core';
import { API_URL } from '../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutomateService {
    API_PATH = API_URL;
    constructor(private httpClient:HttpClient ) { }
  
    getAllDreams():Observable<any>{
         return this.httpClient.get<any>(`${this.API_PATH}/automate/GetAllInvestments.php`);
    }

    makeDreamActive():Observable<any>{
        return this.httpClient.get<any>(`${this.API_PATH}/automate/UpdateDreamToActiveDreams.php`);
    }
    MakeDreamsMature():Observable<any>{
        return this.httpClient.get<any>(`${this.API_PATH}/automate/MatureDreams.php`);
    }
    lockUser():Observable<any>{
        return this.httpClient.get<any>(`${this.API_PATH}/automate/LockUsers.php`);
    }

}
