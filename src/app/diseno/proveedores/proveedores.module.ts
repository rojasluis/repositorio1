import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { PageHeaderModule } from '../../shared';

import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { CrudProveedoresComponent } from './crud-proveedores/crud-proveedores.component';


@NgModule({
    imports: [CommonModule, ProveedoresRoutingModule, PageHeaderModule],
    declarations: [ListaProveedoresComponent, CrudProveedoresComponent]
})
export class ProveedoresModule { }
