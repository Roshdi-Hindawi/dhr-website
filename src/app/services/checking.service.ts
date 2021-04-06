import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  constructor(private _http: HttpClient) { }

  new(data) {
    return this._http.post(`${environment.apiUrl}/checkin/create.php`,data);
  }
}
