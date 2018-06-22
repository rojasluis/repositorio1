import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAreasRoutingModule } from './lista-areas-routing.module';
import { ListaAreasComponent } from './lista-areas.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [CommonModule, ListaAreasRoutingModule, PageHeaderModule],
    declarations: [ListaAreasComponent]
})
export class ListaAreasModule { }
