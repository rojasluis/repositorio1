import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
// import { AreasComponent } from './areas.component';
import { PageHeaderModule } from '../../shared';
import { ListaAreasComponent } from './lista-areas/lista-areas.component';
import { CrudAreasComponent } from './crud-areas/crud-areas.component';


@NgModule({
    imports: [CommonModule, AreasRoutingModule, PageHeaderModule],
    declarations: [ListaAreasComponent, CrudAreasComponent]
})
export class AreasModule { }
