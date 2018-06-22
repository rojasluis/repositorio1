import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCatIngresosComponent } from './lista-catingresos.component';

const routes: Routes = [
    {
        path: '',
        component: ListaCatIngresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaCatIngresosRoutingModule { }
