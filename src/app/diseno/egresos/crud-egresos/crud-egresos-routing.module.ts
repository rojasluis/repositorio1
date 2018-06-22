import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudEgresosComponent } from './crud-egresos.component';

const routes: Routes = [
    {
        path: '',
        component: CrudEgresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudEgresosRoutingModule { }







