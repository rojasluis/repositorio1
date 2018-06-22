import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../../shared';
import { CrudIngresosRoutingModule } from './crud-ingresos-routing.module';
import { CrudIngresosComponent } from './crud-ingresos.component';

@NgModule({
    imports: [CommonModule, CrudIngresosRoutingModule, PageHeaderModule],
    declarations: [CrudIngresosComponent]
})
export class CrudIngresosModule {}
