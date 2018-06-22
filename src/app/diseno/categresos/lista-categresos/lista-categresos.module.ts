import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../../../shared';
import { ListaCatEgresosRoutingModule } from './lista-categresos-routing.module';
import { ListaCatEgresosComponent } from './lista-categresos.component';

@NgModule({
    imports: [CommonModule, ListaCatEgresosRoutingModule, PageHeaderModule],
    declarations: [ListaCatEgresosComponent]
})
export class ListaCatEgresosModule { }


