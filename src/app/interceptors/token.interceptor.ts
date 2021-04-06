import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')
                                .set('Access-Control-Allow-Headers', '*')
                                .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
        });
        return next.handle(authReq);
    }
}