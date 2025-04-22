import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenDataService {

  getURL = "../mockData/madersKitchen.json";
  postURL = "";

  constructor(
    private httpClient: HttpClient
  ) { }

   getSalesData(): Observable<any> {
    // Fetch the data from the JSON file
    return this.httpClient.get<any>(this.getURL);    
  }

}
