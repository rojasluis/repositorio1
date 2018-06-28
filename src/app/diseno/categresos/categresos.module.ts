import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatEgresosRoutingModule } from './categresos-routing.module';
// import { CatEgresosComponent } from './categresos.component';
import { PageHeaderModule } from '../../shared';


import { CrudCatEgresosComponent } from './crud-categresos/crud-categresos.component';
import { ListaCatEgresosComponent } from './lista-categresos/lista-categresos.component';


@NgModule({
    imports: [CommonModule, CatEgresosRoutingModule, PageHeaderModule],
    declarations: [CrudCatEgresosComponent, ListaCatEgresosComponent]
})
export class CatEgresosModule { }
