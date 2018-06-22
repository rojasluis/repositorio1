import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCatEgresosComponent } from './lista-categresos.component';

const routes: Routes = [
    {
        path: '',
        component: ListaCatEgresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaCatEgresosRoutingModule { }
