import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaBancariaRoutingModule } from './cuentabancaria-routing.module';

import { PageHeaderModule } from '../../shared';

import { ListaCuentaBancariaComponent } from './lista-cuentabancaria/lista-cuentabancaria.component';
import { CrudCuentaBancariaComponent } from './crud-cuentabancaria/crud-cuentabancaria.component';



@NgModule({
    imports: [CommonModule, CuentaBancariaRoutingModule, PageHeaderModule],
    declarations: [ListaCuentaBancariaComponent, CrudCuentaBancariaComponent]
})
export class CuentaBancariaModule { }
