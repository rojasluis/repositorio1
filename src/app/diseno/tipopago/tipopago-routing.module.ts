
// import { TipoPagoComponent } from './tipopago.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';

import { ListaTipoPagoComponent } from './lista-tipopago/lista-tipopago.component';
import { CrudTipoPagoComponent } from './crud-tipo-pago/crud-tipo-pago.component';


const routes: Routes = [
    { path: '', component: ListaTipoPagoComponent, 
        children: [
            { path: 'crud-tipo-pago', component: CrudTipoPagoComponent }
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TipoPagoRoutingModule {}
