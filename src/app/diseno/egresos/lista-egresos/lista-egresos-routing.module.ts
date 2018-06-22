import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEgresosComponent } from './lista-egresos.component';
//import { ListaEgresosComponent } from './lista_egresos.component';

const routes: Routes = [
    {
        path: '',
        component: ListaEgresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaEgresosRoutingModule {}



