import { Injectable } from '@angular/core';

import {
  HttpEvent,HttpClient, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IWord } from './iword';
import { nextTick } from 'q';
import { sendRequest } from 'selenium-webdriver/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private cache: HttpCache) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.method !== 'GET') { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    return cachedResponse
    ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {

    // No headers allowed in npm search request
    const noHeaderReq = req.clone({ headers: new HttpHeaders() });

    return next.handle(noHeaderReq).pipe(
      tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          cache.put(req, event); // Update the cache.
        }
      })
    );
  }
}
