import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { MedioPago } from '../tipopago/medio.pago.model';
import { RequestOptions, Jsonp } from '@angular/http';


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
    return this.http.get<MedioPago>(url)
      .map((res) =>  {
        return res;
      });
  }

  // obtner todos los Conceptos de egresos
  getAllConceptoEgreso(){
    const url = `${this.url}/conceptoegreso/getall`;    
    return this.http.get(url);
  }

  grabar(data: any) {
    const url = `${this.url}/egreso/save`;        
    // const date: Date = new Date;
   // data = {"idEgreso":0,"detalles":null,"fecha":date.getDate,"fechaRegistro":null,"hora":null,"imagen":"C:\\fakepath\\smalllogo.png","monto":150.0,"conceptoEgreso":{"idConceptoEgreso":2,"descripcion":"GASTOS DE ADMINISTRACION","egresos":null},"cuenta":{"idCuenta":2,"banco":"BANCO BBVA CONTINENTAL","numeroCuenta":null,"tipoCuenta":"SOLES","titularCuenta":null,"egresos":null,"ingresos":null},"medioPago":{"idMedioPago":1,"descripcionMedioPago":"EFECTIVO","egresos":null,"ingresos":null},"proveedor":null,"sucursal":{"idSucursal":1,"correo":null,"descripcion":"MBB","direccion":"jr. aaa","telefono":null,"egresos":null,"ingresos":null,"usuarios":null},"usuario":{"idUsuario":1,"contrasena":"123456","direccion":null,"fechaIngreso":null,"fechaNacimiento":null,"nombreApellido":"user1","sexo":null,"telefono":null,"usuario":"user1","egresos":null,"ingresos":null,"area":{"idArea":1,"descripcion":"Administracion","usuarios":null},"sucursal":{"idSucursal":1,"correo":null,"descripcion":"MBB","direccion":"jr. aaa","telefono":null,"egresos":null,"ingresos":null,"usuarios":null}}};
    // console.log('data', data);

    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const headerx = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, JSON.stringify(data), {headers: headerx});
  }

}

