import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';


@Injectable()
export class EgresosService {
  private url = URL_SERVICIOS;
  constructor(private http: HttpClient) { }

  // obtener todos las cuentas bancarias
  getAllCuentas(){
    const url = `${this.url}/cuenta/getall`;    
    return this.http.get(url);
  }

  // obtner todos los medio de pago
  getAllMedioPago(){
    const url = `${this.url}/mediopago/getall`;    
    return this.http.get(url);
  }

  // obtner todos los Conceptos de egresos
  getAllConceptoEgreso(){
    const url = `${this.url}/conceptoegreso/getall`;    
    return this.http.get(url);
  }

}

