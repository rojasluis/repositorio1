import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProveedoresRoutingModule } from './lista-proveedores-routing.module';
import { ListaProveedoresComponent } from './lista-proveedores.component';
import { PageHeaderModule } from '../../../shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
    imports: [CommonModule, ListaProveedoresRoutingModule, PageHeaderModule, BsDropdownModule.forRoot()],
    declarations: [ListaProveedoresComponent]
})
export class ListaProveedoresModule {}
