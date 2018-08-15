import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-areas',
  templateUrl: './crud-areas.component.html',
  animations: [routerTransition()]
})
export class CrudAreasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

