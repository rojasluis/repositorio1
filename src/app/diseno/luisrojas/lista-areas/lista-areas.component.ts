import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-lista-areas',
  templateUrl: './lista-areas.component.html',  
  animations: [routerTransition()]
})
export class ListaAreasComponent implements OnInit {
  // mostrarLista: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
