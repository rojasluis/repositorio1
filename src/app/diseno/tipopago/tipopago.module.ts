import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoPagoRoutingModule } from './tipopago-routing.module';
import { PageHeaderModule } from '../../shared';

import { ListaTipoPagoComponent } from './lista-tipopago/lista-tipopago.component';
import { CrudTipoPagoComponent } from './crud-tipo-pago/crud-tipo-pago.component';


@NgModule({
    imports: [CommonModule, TipoPagoRoutingModule, PageHeaderModule],
    declarations: [ListaTipoPagoComponent, CrudTipoPagoComponent]
})
export class TipoPagoModule { }
