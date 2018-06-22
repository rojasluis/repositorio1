import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudTipoPagoComponent } from './crud-tipo-pago.component';

const routes: Routes = [
    {
        path: '',
        component: CrudTipoPagoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudTipoPagoRoutingModule { }
