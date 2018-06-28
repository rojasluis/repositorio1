import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  animations: [routerTransition()]
})
export class ListaProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
