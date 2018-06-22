import { AreasComponent } from './areas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared';
const routes: Routes = [
    { path: '', loadChildren: './lista-areas/lista-areas.module#ListaAreasModule' },
    { path: 'crud-areas', loadChildren: './crud-areas/crud-areas.module#CrudAreasModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AreasRoutingModule {}
