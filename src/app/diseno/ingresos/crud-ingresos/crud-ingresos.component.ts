import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-ingresos',
  templateUrl: './crud-ingresos.component.html',
  styleUrls: ['./crud-ingresos.component.scss'],
  animations: [routerTransition()]
})
export class CrudIngresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
