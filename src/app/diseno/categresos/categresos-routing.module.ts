import { CatEgresosComponent } from './categresos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-categresos/lista-categresos.module#ListaCatEgresosModule' },
    { path: 'crud-categresos', loadChildren: './crud-categresos/crud-categresos.module#CrudCatEgresosModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatEgresosRoutingModule {}
