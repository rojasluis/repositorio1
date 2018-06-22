import { CatIngresosComponent } from './catingresos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-catingresos/lista-catingresos.module#ListaCatIngresosModule' },
    { path: 'crud-catingresos', loadChildren: './crud-catingresos/crud-catingresos.module#CrudCatIngresosModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatIngresosRoutingModule {}
