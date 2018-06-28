// import { ProveedoresComponent } from './proveedores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';

import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { CrudProveedoresComponent } from './crud-proveedores/crud-proveedores.component';



const routes: Routes = [
    { path: '', component: ListaProveedoresComponent, 
        children: [
            { path: 'crud-proveedores', component: CrudProveedoresComponent }
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProveedoresRoutingModule {}
