import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MadersDataService {

  // getURL = "../mockData/madersKitchen.json";
  getURL = "http://sales-data.local/api/data.php";
  postURL = "";

  constructor(
    private httpClient: HttpClient
  ) { }

   getSalesData(): Observable<any> {
    // Fetch the data from the JSON file
    return this.httpClient.get<any>(this.getURL);    
  }


  getSalesAverages(){
    
  }
}
