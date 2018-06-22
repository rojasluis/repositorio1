import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoPagoRoutingModule } from './tipopago-routing.module';
import { TipoPagoComponent } from './tipopago.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, TipoPagoRoutingModule, PageHeaderModule],
    declarations: [TipoPagoComponent]
})
export class TipoPagoModule { }
