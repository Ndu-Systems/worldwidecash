import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../shared/config';

@Injectable()
export class DreamService {

url: string = API_URL;
constructor(private http:HttpClient) { }
createDream(dream):Observable<any>{
return this.http.post(`${this.url}/Invest/Invest.php`,dream);
}
}
