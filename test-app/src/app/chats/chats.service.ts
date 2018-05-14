import { Injectable } from "@angular/core";
import { API_URL } from "../shared/config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChatsService {
  API_PATH = API_URL;
  constructor(private httpClient: HttpClient) {}

  getChats(email: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.API_PATH}/Account/GetChats.php?email=${email}`
    );
  }

  sendChat(data):Observable<any>{
    return this.httpClient.post(`${this.API_PATH}/Account/SendChat.php`,data);
    }
}
