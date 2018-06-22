import { Routes, RouterModule } from "@angular/router";
import { CrudCatEgresosComponent } from "./crud-categresos.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    
    {
        path: '',
        component: CrudCatEgresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudCatEgresosRoutingModule { }




