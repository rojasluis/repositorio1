import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTipoPagoComponent } from './lista-tipopago.component';

const routes: Routes = [
    {
        path: '',
        component: ListaTipoPagoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaTipoPagoRoutingModule {}
