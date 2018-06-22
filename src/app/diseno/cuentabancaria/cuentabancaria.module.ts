import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaBancariaRoutingModule } from './cuentabancaria-routing.module';
import { CuentaBancariaComponent } from './cuentabancaria.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, CuentaBancariaRoutingModule, PageHeaderModule],
    declarations: [CuentaBancariaComponent]
})
export class CuentaBancariaModule { }
