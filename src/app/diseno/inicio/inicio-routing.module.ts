import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { AuthGuard } from '../../shared/guard';

const routes: Routes = [
    {
        path: '', component: InicioComponent,
        canActivate:[AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InicioRoutingModule {
}