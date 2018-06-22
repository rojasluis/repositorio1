import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-lista-ingresos',
  templateUrl: './lista-ingresos.component.html',
  styleUrls: ['./lista-ingresos.component.scss'],
  animations: [routerTransition()]
})
export class ListaIngresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
