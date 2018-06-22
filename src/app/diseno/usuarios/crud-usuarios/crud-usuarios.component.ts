import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss'],
  animations: [routerTransition()]
})
export class CrudUsuariosComponent implements OnInit {

  listasexo =["Masculino","Femenino"];

  ngOnInit() {
  }

}




 
