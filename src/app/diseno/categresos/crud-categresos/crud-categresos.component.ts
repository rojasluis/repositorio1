import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-categresos',
  templateUrl: './crud-categresos.component.html',
  styleUrls: ['./crud-categresos.component.scss'],
  animations: [routerTransition()]
})
export class CrudCatEgresosComponent implements OnInit {

  
  constructor( ) { }

  ngOnInit() { }



}
