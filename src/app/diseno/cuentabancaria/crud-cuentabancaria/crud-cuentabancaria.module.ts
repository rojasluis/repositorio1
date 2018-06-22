import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../../shared';
import { CrudCuentaBancariaRoutingModule } from './crud-cuentabancaria-routing.module';
import { CrudCuentaBancariaComponent } from './crud-cuentabancaria.component';

@NgModule({
    imports: [CommonModule, CrudCuentaBancariaRoutingModule, PageHeaderModule],
    declarations: [CrudCuentaBancariaComponent]
})
export class CrudCuentaBancariaModule {}
