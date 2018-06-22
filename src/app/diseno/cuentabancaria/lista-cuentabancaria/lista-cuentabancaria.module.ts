import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaCuentaBancariaRoutingModule } from './lista-cuentabancaria-routing.module';
import { ListaCuentaBancariaComponent } from './lista-cuentabancaria.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, ListaCuentaBancariaRoutingModule, PageHeaderModule],
    declarations: [ListaCuentaBancariaComponent]
})
export class ListaCuentaBancariaModule { }
