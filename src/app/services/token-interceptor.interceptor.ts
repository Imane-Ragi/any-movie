import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private storage :  LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.storage.getToken();
    if(token)
    {
      request = request.clone({
        setHeaders : {
          Authorization : `Bearer ${token}`
        }
      })
    }
    
    return next.handle(request);
  }
}
