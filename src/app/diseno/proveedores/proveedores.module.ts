import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, ProveedoresRoutingModule, PageHeaderModule],
    declarations: [ProveedoresComponent]
})
export class ProveedoresModule { }
