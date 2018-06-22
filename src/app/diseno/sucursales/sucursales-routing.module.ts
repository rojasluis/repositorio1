import { SucursalesComponent } from './sucursales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-sucursales/lista-sucursales.module#ListaSucursalesModule' },
    { path: 'crud-sucursales', loadChildren: './crud-sucursales/crud-sucursales.module#CrudSucursalesModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SucursalesRoutingModule {}
