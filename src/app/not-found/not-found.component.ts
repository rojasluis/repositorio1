import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }
    mensaje=swal({
      title: 'Upsssss! :(',
      text: 'Pagina no encontrada',
      type: 'error',
      confirmButtonText: 'Regresar'
})





  ngOnInit() {
  }

}
