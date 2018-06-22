import { CuentaBancariaComponent } from './cuentabancaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-cuentabancaria/lista-cuentabancaria.module#ListaCuentaBancariaModule' },
   { path: 'crud-cuentabancaria', loadChildren: './crud-cuentabancaria/crud-cuentabancaria.module#CrudCuentaBancariaModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CuentaBancariaRoutingModule {}
