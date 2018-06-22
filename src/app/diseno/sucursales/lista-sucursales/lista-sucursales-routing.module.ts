import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaSucursalesComponent } from './lista-sucursales.component';

const routes: Routes = [
    {
        path: '',
        component: ListaSucursalesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaSucursalesRoutingModule {}
