import { ProveedoresComponent } from './proveedores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-proveedores/lista-proveedores.module#ListaProveedoresModule' },
    { path: 'crud-proveedores', loadChildren: './crud-proveedores/crud-proveedores.module#CrudProveedoresModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProveedoresRoutingModule {}
