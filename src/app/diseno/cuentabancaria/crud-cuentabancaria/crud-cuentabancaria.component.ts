import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-cuentabancaria',
  templateUrl: './crud-cuentabancaria.component.html',
  animations: [routerTransition()]
})
export class CrudCuentaBancariaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
