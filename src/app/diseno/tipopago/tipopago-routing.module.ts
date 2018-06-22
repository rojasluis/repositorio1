
import { TipoPagoComponent } from './tipopago.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-tipopago/lista-tipopago.module#ListaTipoPagoModule' },
    { path: 'crud-tipo-pago', loadChildren: './crud-tipo-pago/crud-tipo-pago.module#CrudTipoPagoModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoPagoRoutingModule {}
