// import { UsuariosComponent } from './usuarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';

import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';


const routes: Routes = [
    { path: '', component: ListaUsuariosComponent,  
        children: [
            { path: 'crud-usuarios', component: CrudUsuariosComponent }
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
