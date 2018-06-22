import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.scss'],
  animations: [routerTransition()]
})
export class ListaProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
