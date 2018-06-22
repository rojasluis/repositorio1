import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuariosRoutingModule } from './lista-usuarios-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios.component';
import { PageHeaderModule } from '../../../shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
    imports: [CommonModule, ListaUsuariosRoutingModule, PageHeaderModule, BsDropdownModule.forRoot()],
    declarations: [ListaUsuariosComponent]
})
export class ListaUsuariosModule {}
