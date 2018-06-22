import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-sucursales',
  templateUrl: './crud-sucursales.component.html',
  styleUrls: ['./crud-sucursales.component.scss'],
  animations: [routerTransition()]
})
export class CrudSucursalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
