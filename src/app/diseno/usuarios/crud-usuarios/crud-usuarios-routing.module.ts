import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudUsuariosComponent } from './crud-usuarios.component';

const routes: Routes = [
    {
        path: '',
        component: CrudUsuariosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudUsuariosRoutingModule {}
