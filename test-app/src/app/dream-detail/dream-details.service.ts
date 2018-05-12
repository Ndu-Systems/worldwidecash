import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { API_URL } from "../shared/config";

@Injectable()
export class DreamDetailsService {
    dreamID: number;
  API_PATH = API_URL;
  keeper: any;
  constructor(private httpClient: HttpClient) {}
  getDreamDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.API_PATH}/Invest/GetInvestmentById.php?id=${id}`
    );
  }
  saveKeeper(data: any) {
    if (data) {
      this.keeper = data;
    }
  }

  getKeeper(): any {
    return this.keeper;
  }
  saveDreamID(id:number){
    this.dreamID= id;
  }
  getDreamID(){
      return this.dreamID;
  }
  SavePOPtoDB(data): Observable<any> {
    return this.httpClient.post<any>(
      `${this.API_PATH}/Invest/UpdatePOP.php`,
      data
    );
  }
  updateDreamToPaid(data): Observable<any> {
    return this.httpClient.post<any>(
      `${this.API_PATH}/Invest/UpdateDreamToPaid.php`,
      data
    );
  }
}
