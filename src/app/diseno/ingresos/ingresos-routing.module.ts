// import { IngresosComponent } from './ingresos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';

import { ListaIngresosComponent } from './lista-ingresos/lista-ingresos.component';
import { CrudIngresosComponent } from './crud-ingresos/crud-ingresos.component';

const routes: Routes = [
    { path: '', component: ListaIngresosComponent, 
        children: [
            { path: 'crud-ingresos', component: CrudIngresosComponent }
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngresosRoutingModule {}
