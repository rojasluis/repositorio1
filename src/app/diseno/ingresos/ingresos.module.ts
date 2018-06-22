import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresosComponent } from './ingresos.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, IngresosRoutingModule, PageHeaderModule],
    declarations: [IngresosComponent]
})
export class IngresosModule { }
