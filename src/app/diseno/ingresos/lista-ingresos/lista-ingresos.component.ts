import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CrudService } from '../../services/crud.service';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  animations: [routerTransition()]
})
export class ListaIngresosComponent implements OnInit {

  ingresoSModel: Ingreso[];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.crudService.getAll('ingreso','getall').subscribe(res => {      
      this.ingresoSModel = <Ingreso[]> res;
      console.log('ingresos', this.ingresoSModel);
    })
  }

}
