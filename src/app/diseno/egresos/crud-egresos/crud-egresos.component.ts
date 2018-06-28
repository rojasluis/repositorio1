import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { EgresosService } from '../../services/service.index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Egreso } from '../../egresos/egreso.model';
import { Cuenta } from '../../cuentabancaria/cuenta.model';
import { MedioPago } from '../../tipopago/medio.pago.model';
import { conceptoEgreso } from '../../categresos/concepto.egreso.model';
// import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';



@Component({
  selector: 'app-crud-egresos',
  templateUrl: './crud-egresos.component.html',  
  animations: [routerTransition()]
})
export class CrudEgresosComponent implements OnInit {

  db_cuenta_origen: any;
  db_medio_pago: any;
  db_concepto_egreso:any;

  
  Egreso_model: Egreso;
  Cuenta_model: Cuenta;
  MedioPago_model: MedioPago;
  ConceptoEgreso_model: conceptoEgreso;

  form: FormGroup;
  date: Date = new Date();

  constructor( private _egresoService: EgresosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this._egresoService.getAllMedioPago().subscribe( res => this.MedioPago_model = res );
    this._egresoService.getAllCuentas().subscribe( res => {this.db_cuenta_origen = res;});    
    this._egresoService.getAllConceptoEgreso().subscribe( res => this.db_concepto_egreso = res);
        

    this.form = this.formBuilder.group({      
      imagen:'',
      monto:150.0,
      conceptoEgreso:[1, Validators.required],
      cuenta:this.db_cuenta_origen,
      medioPago:this.MedioPago_model,      
      fecha: null,
      sucursal:null,
      usuario:null,      
      detalles: '',
      idEgreso:0
    });

  }

  aaa(){    
    console.log(this.form.value.medioPago);
  }

  guardarCambios() {        
    console.log('egreso model ', this.Egreso_model);    
    // this.form.value.conceptoEgreso = this.form.value.conceptoEgreso.idConceptoEgreso;    
    //const date: Date = new Date;
    this.form.value.fecha = Date.parse(this.form.value.fecha);
    this.form.value.cuenta = JSON.parse(this.form.value.cuenta)
    this.form.value.medioPago = JSON.parse(this.form.value.medioPago)
    this.Egreso_model = <Egreso> this.form.value;
    console.log(JSON.stringify(this.form.value));
    console.log(this.form.value);

    this._egresoService.grabar(this.Egreso_model).subscribe( res => console.log('servidor', res) );
    
    
  }

}
