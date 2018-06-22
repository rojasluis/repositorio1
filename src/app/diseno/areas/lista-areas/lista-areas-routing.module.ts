import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAreasComponent } from './lista-areas.component';

const routes: Routes = [
    {
        path: '',
        component: ListaAreasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaAreasRoutingModule { }
