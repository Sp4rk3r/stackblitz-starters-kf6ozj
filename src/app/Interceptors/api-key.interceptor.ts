import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  api_key: string = '1068e7f6fb43bfc1f50bef4ffa8cae45';
  httpHeader = new HttpHeaders().set('x-rapidapi-key', this.api_key);
  url: string = 'https://v3.football.api-sports.io';

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const newRequest = request.clone({
      url: `${this.url}${request.url}`,
      headers: this.httpHeader,
    });

    return next.handle(newRequest);
  }
}
