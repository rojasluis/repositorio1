import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  constructor() { }

  buscar (Egresos: Egreso[], parametro: string): any {    
    parametro = parametro.toLocaleLowerCase();

    return Egresos.map(x => {
      const cadena = `${x.conceptoEgreso.descripcion} 
          ${x.fecha} ${x.medioPago.descripcionMedioPago} ${x.monto}
          ${x.cuenta.banco}`.toLocaleLowerCase();
          
      return cadena.indexOf(parametro) !== -1 ? x : null;
    });
  }
}
