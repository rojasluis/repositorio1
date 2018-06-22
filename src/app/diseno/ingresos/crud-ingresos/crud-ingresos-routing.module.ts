import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudIngresosComponent } from './crud-ingresos.component';

const routes: Routes = [
    {
        path: '',
        component: CrudIngresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudIngresosRoutingModule { }
