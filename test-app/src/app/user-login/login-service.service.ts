import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginServiceService {
<<<<<<< HEAD
 API_PATH = "https://www.funderslife.com/api1";
  //API_PATH = "http://localhost:8080/worldwidecash/api";
=======
 //API_PATH = "https://www.funderslife.com/api1";

  API_PATH = "http://localhost:8080/worldwidecash/worldwidecash/api";

>>>>>>> 2f7dbc41b155326cfeb1b18b45b855ead1372c95
  constructor(private httpClient:HttpClient ) { }

  loginUser(email:string, password:string):Observable<any>{
       return this.httpClient.get<any>(`${this.API_PATH}/LoginUser.php?email=${email}&password=${password}`);
  }


}
