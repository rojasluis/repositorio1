import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cuentabancaria',
  templateUrl: './cuentabancaria.component.html',
  styleUrls: ['./cuentabancaria.component.scss'],
  animations: [routerTransition()]
})
export class CuentaBancariaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
