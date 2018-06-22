import { Routes, RouterModule } from "@angular/router";
import { CrudCatIngresosComponent } from "./crud-catingresos.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    
    {
        path: '',
        component: CrudCatIngresosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudCatIngresosRoutingModule { }




