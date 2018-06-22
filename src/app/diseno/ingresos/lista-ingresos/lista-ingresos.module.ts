import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared';
import { ListaIngresosRoutingModule } from './lista-ingresos-routing.module';
import { ListaIngresosComponent } from './lista-ingresos.component';

@NgModule({
    imports: [CommonModule, ListaIngresosRoutingModule, PageHeaderModule],
    declarations: [ListaIngresosComponent]
})
export class ListaIngresosModule {}
