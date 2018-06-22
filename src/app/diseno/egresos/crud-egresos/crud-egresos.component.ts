import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { EgresosService } from '../../services/service.index';

@Component({
  selector: 'app-crud-egresos',
  templateUrl: './crud-egresos.component.html',
  styleUrls: ['./crud-egresos.component.scss'],
  animations: [routerTransition()]
})
export class CrudEgresosComponent implements OnInit {

  db_cuenta_origen: any;
  db_medio_pago: any;
  db_concepto_egreso:any;
  constructor( private _egresoService: EgresosService ) { }

  ngOnInit() {

    this._egresoService.getAllCuentas().subscribe( res => this.db_cuenta_origen = res);
    this._egresoService.getAllMedioPago().subscribe( res => this.db_medio_pago = res);
    this._egresoService.getAllConceptoEgreso().subscribe( res => {this.db_concepto_egreso = res; console.log(res);});
    

  }

}
