import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-lista-areas',
  templateUrl: './lista-areas.component.html',
  styleUrls: ['./lista-areas.component.scss'],
  animations: [routerTransition()]
})
export class ListaAreasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
