import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-lista-egresos',
  templateUrl: './lista-egresos.component.html',
  animations: [routerTransition()]
})
export class ListaEgresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
