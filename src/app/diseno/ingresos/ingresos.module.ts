import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { PageHeaderModule } from '../../shared';

import { ListaIngresosComponent } from './lista-ingresos/lista-ingresos.component';
import { CrudIngresosComponent } from './crud-ingresos/crud-ingresos.component';


@NgModule({
    imports: [CommonModule, IngresosRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule, NgSelectModule],
    declarations: [ListaIngresosComponent, CrudIngresosComponent]
})
export class IngresosModule { }
