import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private _http: HttpClient) { }

  getImages(){
    return this._http.get(`http://localhost/delphin-api/public/api/gallery-images`);
    }
}
