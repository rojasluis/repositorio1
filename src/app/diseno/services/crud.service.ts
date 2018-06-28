import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = URL_SERVICIOS;
  constructor(private http: HttpClient) { }

  getAll (controller: string, evento: string) {
    const url = `${this.url}/${controller}/${evento}`;
    return this.http.get<any[]>(url);
  }

  create (model:any,controller:string,evento:string): Observable<any> {
    const url = `${this.url}/${controller}/${evento}`;
    const header = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, JSON.stringify(model), {headers: header});
  }
}
