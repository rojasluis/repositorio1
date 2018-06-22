import { IngresosComponent } from './ingresos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-ingresos/lista-ingresos.module#ListaIngresosModule' },
    { path: 'crud-ingresos', loadChildren: './crud-ingresos/crud-ingresos.module#CrudIngresosModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngresosRoutingModule {}
