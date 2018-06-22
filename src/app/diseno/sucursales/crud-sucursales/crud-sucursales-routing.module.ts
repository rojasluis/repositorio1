import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudSucursalesComponent } from './crud-sucursales.component';

const routes: Routes = [
    {
        path: '',
        component: CrudSucursalesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudSucursalesRoutingModule { }
