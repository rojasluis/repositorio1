import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CrudService } from '../../services/crud.service';
import { Egreso } from '../egreso.model';
import { EgresosService } from '../egresos.service';


@Component({
  selector: 'app-lista-egresos',
  templateUrl: './lista-egresos.component.html',
  animations: [routerTransition()]
})
export class ListaEgresosComponent implements OnInit {

  egresoSModel: Egreso[];
  db_egresos: any;
  constructor(private crudService: CrudService, private egresoService: EgresosService) { }

  ngOnInit() {
    this.getAll();
  }  

  getAll() {
    this.crudService.getAll('egreso','getall').subscribe(res => {      
      this.db_egresos = res;
      this.egresoSModel = <Egreso[]> res;      
      console.log('egresos', this.egresoSModel);
    })
  }

  buscar(parametro: string) {
    this.db_egresos = this.egresoService.buscar(this.egresoSModel, parametro);
    

    // this.db_egresos = this.egresoSModel
    //         .reduce((x,y) => {              
    //           // const cadena = `${x.conceptoEgreso.descripcion} 
    //           //   ${x.fecha} ${x.medioPago.descripcionMedioPago} ${x.monto}
    //           //   ${x.cuenta.banco}`.toLocaleLowerCase()              
    //           return x.
    //           // return cadena.indexOf(parametro.toLocaleLowerCase()) !== -1 ? x : null;
    //         });
    // console.log(this.db_egresos);
  }

}
