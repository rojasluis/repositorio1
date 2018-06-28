import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { PageHeaderModule } from '../../shared';

import { ListaSucursalesComponent } from './lista-sucursales/lista-sucursales.component';
import { CrudSucursalesComponent } from './crud-sucursales/crud-sucursales.component';


@NgModule({
    imports: [CommonModule, SucursalesRoutingModule, PageHeaderModule],
    declarations: [ListaSucursalesComponent, CrudSucursalesComponent]
})
export class SucursalesModule { }
