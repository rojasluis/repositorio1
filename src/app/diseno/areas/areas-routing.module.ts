// import { AreasComponent } from './areas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAreasComponent } from './lista-areas/lista-areas.component';
import { CrudAreasComponent } from './crud-areas/crud-areas.component';

import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', component : ListaAreasComponent ,
        children: [
            { path: 'crud-areas', component : CrudAreasComponent }
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AreasRoutingModule {}
