import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesComponent } from './sucursales.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, SucursalesRoutingModule, PageHeaderModule],
    declarations: [SucursalesComponent]
})
export class SucursalesModule { }
