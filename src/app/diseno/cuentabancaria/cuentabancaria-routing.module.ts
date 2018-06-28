// import { CuentaBancariaComponent } from './cuentabancaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';

import { ListaCuentaBancariaComponent } from './lista-cuentabancaria/lista-cuentabancaria.component';
import { CrudCuentaBancariaComponent } from './crud-cuentabancaria/crud-cuentabancaria.component';

const routes: Routes = [
    { path: '', component: ListaCuentaBancariaComponent,
        children: [
            { path: 'crud-cuentabancaria', component: CrudCuentaBancariaComponent }
        ]
    }   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CuentaBancariaRoutingModule {}
