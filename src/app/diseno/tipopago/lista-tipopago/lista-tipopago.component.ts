import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-lista-tipopago',
  templateUrl: './lista-tipopago.component.html',  
  animations: [routerTransition()]
})
export class ListaTipoPagoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
