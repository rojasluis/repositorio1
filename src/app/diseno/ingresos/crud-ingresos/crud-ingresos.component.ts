import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CrudService } from '../../services/service.index';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IngresosModule } from '../ingresos.module';
import { Usuario } from '../../usuarios/usuario.model';
import { Ingreso } from '../ingreso.model';


@Component({
  selector: 'app-crud-ingresos',
  templateUrl: './crud-ingresos.component.html',
  animations: [routerTransition()]
})
export class CrudIngresosComponent implements OnInit {
  form: FormGroup;
  
  conceptoIngresoModel: IngresosModule;
  usuarioModel: Usuario = null;

  db_concepto_ingreso: any;
  db_cuenta: any;
  db_medio_pago: any;  

  constructor(private crudService: CrudService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.prepararFormulario();
    this.obtenerMaestros();
  }

  prepararFormulario() {
    this.form = this.formBuilder.group({      
        idIngreso: 0,
        fecha: '',
        hora: '',
        montoIngresado: 0.00,
        conceptoIngreso: this.db_concepto_ingreso,
        cuenta: this.db_cuenta,
        medioPago: this.db_medio_pago,        
        detalles: ''  
    });
  }

  obtenerMaestros() {
    this.crudService.getAll('conceptoingreso', 'getall').subscribe(res => this.db_concepto_ingreso = res);      
    this.crudService.getAll('cuenta', 'getall').subscribe(res => this.db_cuenta = res);      
    this.crudService.getAll('mediopago', 'getall').subscribe(res => this.db_medio_pago = res);
  }

  guardarCambios() {
    this.form.value.fecha = Date.parse(this.form.value.fecha);
    this.form.value.cuenta = JSON.parse(this.form.value.cuenta)
    this.form.value.medioPago = JSON.parse(this.form.value.medioPago)
    let Ingreso_model:Ingreso = <Ingreso> this.form.value;
    
    Ingreso_model.usuario = this.usuarioModel;
    
    // console.log('modelo', JSON.stringify(Ingreso_model));
    // console.log('modelo', Ingreso_model);

    this.crudService.create(Ingreso_model, 'ingreso', 'save').subscribe( res => console.log(res))
  }

}
