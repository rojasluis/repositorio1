import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudCuentaBancariaComponent } from './crud-cuentabancaria.component';

const routes: Routes = [
    {
        path: '',
        component: CrudCuentaBancariaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudCuentaBancariaRoutingModule { }
