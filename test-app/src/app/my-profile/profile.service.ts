import { Injectable } from '@angular/core';
import { API_URL } from '../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {

    url: string = API_URL;
    constructor(private http:HttpClient) { }
    updateProfile(dream):Observable<any>{
    return this.http.post(`${this.url}/Invest/Invest.php`,dream);
    }

}
