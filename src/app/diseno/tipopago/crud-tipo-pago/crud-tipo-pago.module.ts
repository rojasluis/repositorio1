import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../../shared';
import { CrudTipoPagoRoutingModule } from './crud-tipo-pago-routing.module';
import { CrudTipoPagoComponent } from './crud-tipo-pago.component';

@NgModule({
    imports: [CommonModule, CrudTipoPagoRoutingModule, PageHeaderModule],
    declarations: [CrudTipoPagoComponent]
})
export class CrudTipoPagoModule {}
