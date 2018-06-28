import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CrudService } from '../../services/crud.service';
import { Egreso } from '../egreso.model';


@Component({
  selector: 'app-lista-egresos',
  templateUrl: './lista-egresos.component.html',
  animations: [routerTransition()]
})
export class ListaEgresosComponent implements OnInit {

  egresoSModel: Egreso[];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.crudService.getAll('egreso','getall').subscribe(res => {      
      this.egresoSModel = <Egreso[]> res;
      console.log('egresos', this.egresoSModel);
    })
  }

}
