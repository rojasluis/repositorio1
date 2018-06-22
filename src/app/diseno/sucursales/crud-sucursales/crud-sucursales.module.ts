import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../../shared';
import { CrudSucursalesRoutingModule } from './crud-sucursales-routing.module';
import { CrudSucursalesComponent } from './crud-sucursales.component';

@NgModule({
    imports: [CommonModule, CrudSucursalesRoutingModule, PageHeaderModule],
    declarations: [CrudSucursalesComponent]
})
export class CrudSucursalesModule {}
