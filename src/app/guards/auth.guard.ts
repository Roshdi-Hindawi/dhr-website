import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Observable<boolean>(observer => {
        const token = localStorage.getItem("TOKEN");
        if (state.url !== "/auth/login") {
          if (token && token !== null) {
            observer.next(true);
          } else {
            this._router.navigate(["/auth/login"]);
            observer.next(false);
          }
        } else {
          if (!token|| token === null) {
            observer.next(true);
          } else {
            this._router.navigate(["/home"]);
            observer.next(false);
          }
        }
      });
  }
  
}
