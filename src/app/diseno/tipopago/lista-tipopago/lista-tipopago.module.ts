import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTipoPagoRoutingModule } from './lista-tipopago-routing.module';
import { ListaTipoPagoComponent } from './lista-tipopago.component';


import { PageHeaderModule } from '../../../shared';
@NgModule({
    imports: [CommonModule, ListaTipoPagoRoutingModule, PageHeaderModule],
    declarations: [ListaTipoPagoComponent]
})
export class ListaTipoPagoModule {}
