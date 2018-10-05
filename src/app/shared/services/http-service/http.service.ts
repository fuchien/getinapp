import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// INTERFACES
import { IResponse } from './../../../interfaces/http-response/http-response.interface';

@Injectable()
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  public insert(data: {}): Observable<Object> {
    const body = JSON.stringify(data);
    return this._http.post(environment.api_url, body);
  }
}
