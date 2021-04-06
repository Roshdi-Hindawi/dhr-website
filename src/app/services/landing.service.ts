import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private _http: HttpClient) { }

  slider() {
    return this._http.get(`http://localhost/delphin/landing/list.php`);
  }
  
  about(){
      return this._http.get(`http://localhost/delphin/landing/about.php`);
  }
}
