import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-tipo-pago',
  templateUrl: './crud-tipo-pago.component.html',
  styleUrls: ['./crud-tipo-pago.component.scss'],
  animations: [routerTransition()]
})
export class CrudTipoPagoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
