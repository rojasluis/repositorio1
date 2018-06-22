import { UsuariosComponent } from './usuarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-usuarios/lista-usuarios.module#ListaUsuariosModule' },
    { path: 'crud-usuarios', loadChildren: './crud-usuarios/crud-usuarios.module#CrudUsuariosModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
