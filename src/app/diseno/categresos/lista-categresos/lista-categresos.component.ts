import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-lista-categresos',
  templateUrl: './lista-categresos.component.html',  
  animations: [routerTransition()]
})
export class ListaCatEgresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

