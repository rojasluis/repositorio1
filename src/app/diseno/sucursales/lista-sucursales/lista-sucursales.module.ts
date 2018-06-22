import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSucursalesRoutingModule } from './lista-sucursales-routing.module';
import { ListaSucursalesComponent } from './lista-sucursales.component';
import { PageHeaderModule } from '../../../shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
    imports: [CommonModule, ListaSucursalesRoutingModule, PageHeaderModule, BsDropdownModule.forRoot()],
    declarations: [ListaSucursalesComponent]
})
export class ListaSucursalesModule {}
