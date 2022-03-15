import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //SOLO PARA PONER EN EL HEADER EL TOKEN PROBAR DESPUES
    // const token = localStorage.getItem('token');
    // if('token'){
    //   request = request.clone({ setHeaders: { Authorization: `Bearer ${token}`  } });
    // }
    return next.handle(request);
  }

}
