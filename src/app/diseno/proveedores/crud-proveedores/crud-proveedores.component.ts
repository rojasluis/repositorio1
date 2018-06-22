import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-proveedores',
  templateUrl: './crud-proveedores.component.html',
  styleUrls: ['./crud-proveedores.component.scss'],
  animations: [routerTransition()]
})
export class CrudProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
