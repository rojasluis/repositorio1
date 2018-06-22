import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-lista-catingresos',
  templateUrl: './lista-catingresos.component.html',
  styleUrls: ['./lista-catingresos.component.scss'],
  animations: [routerTransition()]
})
export class ListaCatIngresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
