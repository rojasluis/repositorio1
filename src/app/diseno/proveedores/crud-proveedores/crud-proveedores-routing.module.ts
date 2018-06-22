import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudProveedoresComponent } from './crud-proveedores.component';

const routes: Routes = [
    {
        path: '',
        component: CrudProveedoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudProveedoresRoutingModule { }
