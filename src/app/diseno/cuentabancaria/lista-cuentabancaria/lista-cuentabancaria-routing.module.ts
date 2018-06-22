import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCuentaBancariaComponent } from './lista-cuentabancaria.component';

const routes: Routes = [
    {
        path: '',
        component: ListaCuentaBancariaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaCuentaBancariaRoutingModule { }
