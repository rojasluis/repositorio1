import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-catingresos',
  templateUrl: './crud-catingresos.component.html',
  animations: [routerTransition()]
})
export class CrudCatIngresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
