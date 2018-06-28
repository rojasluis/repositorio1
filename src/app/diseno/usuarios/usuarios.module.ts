import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { PageHeaderModule } from '../../shared';

import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';


@NgModule({
    imports: [CommonModule, UsuariosRoutingModule, PageHeaderModule],
    declarations: [ListaUsuariosComponent, CrudUsuariosComponent]
})
export class UsuariosModule { }
