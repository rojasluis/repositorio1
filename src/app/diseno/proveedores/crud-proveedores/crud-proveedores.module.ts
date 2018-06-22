import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../../shared';
import { CrudProveedoresRoutingModule } from './crud-proveedores-routing.module';
import { CrudProveedoresComponent } from './crud-proveedores.component';

@NgModule({
    imports: [CommonModule, CrudProveedoresRoutingModule, PageHeaderModule],
    declarations: [CrudProveedoresComponent]
})
export class CrudProveedoresModule {}
