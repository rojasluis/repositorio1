import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = URL_SERVICIOS;
  constructor(private http: HttpClient) { }

  setLogin(model) {
    const url = `${this.url}/usuario/login`;
    const header = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, JSON.stringify(model), {headers: header});
  }
}
