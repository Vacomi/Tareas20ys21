import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs'

@Injectable()

export class MiInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          event = event.clone({body: this.modifyBody(event.body)});
        }

        return event;
      }));
  }

  private modifyBody(body: any) {

        console.log(body)
  }
}

