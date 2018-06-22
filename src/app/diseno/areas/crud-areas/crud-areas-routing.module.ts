import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAreasComponent } from './crud-areas.component';



const routes: Routes = [

    
    {
        path: '',
        component: CrudAreasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudAreasRoutingModule { }
