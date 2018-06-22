import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsuariosRoutingModule } from './crud-usuarios-routing.module';
import { CrudUsuariosComponent } from './crud-usuarios.component';
import { PageHeaderModule } from '../../../shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
    imports: [CommonModule, CrudUsuariosRoutingModule, PageHeaderModule, BsDropdownModule.forRoot()],
    declarations: [CrudUsuariosComponent]
})
export class CrudUsuariosModule {}
