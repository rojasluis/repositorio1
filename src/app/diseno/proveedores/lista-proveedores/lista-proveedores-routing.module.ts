import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProveedoresComponent } from './lista-proveedores.component';

const routes: Routes = [
    {
        path: '',
        component: ListaProveedoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaProveedoresRoutingModule {}
