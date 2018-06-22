import { EgresosComponent } from './egresos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-egresos/lista-egresos.module#ListaEgresosModule' },
    { path: 'crud-egresos', loadChildren: './crud-egresos/crud-egresos.module#CrudEgresosModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EgresosRoutingModule {}
