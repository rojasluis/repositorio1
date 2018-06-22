import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
  animations: [routerTransition()]
})
export class ListaUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




