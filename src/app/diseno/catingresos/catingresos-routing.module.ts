// import { CatIngresosComponent } from './catingresos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';

import { ListaCatIngresosComponent } from './lista-catingresos/lista-catingresos.component';
import { CrudCatIngresosComponent } from './crud-catingresos/crud-catingresos.component';

const routes: Routes = [
    { path: '', component: ListaCatIngresosComponent, 
        children: [
            { path: 'crud-catingresos', component: CrudCatIngresosComponent }
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatIngresosRoutingModule {}
