import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaIngresosComponent } from './lista-ingresos.component';


const routes: Routes = [
    {
        path: '',
        component: ListaIngresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaIngresosRoutingModule {}
