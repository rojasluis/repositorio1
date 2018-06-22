import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared';
import { ListaEgresosRoutingModule } from './lista-egresos-routing.module';
import { ListaEgresosComponent } from './lista-egresos.component';

@NgModule({
    imports: [CommonModule, ListaEgresosRoutingModule, PageHeaderModule],
    declarations: [ListaEgresosComponent]
})
export class ListaEgresosModule {}

