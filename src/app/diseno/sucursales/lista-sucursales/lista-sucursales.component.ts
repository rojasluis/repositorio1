import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',  
  animations: [routerTransition()]
})
export class ListaSucursalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
