import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatIngresosRoutingModule } from './catingresos-routing.module';
import { PageHeaderModule } from '../../shared';

import { ListaCatIngresosComponent } from './lista-catingresos/lista-catingresos.component';
import { CrudCatIngresosComponent } from './crud-catingresos/crud-catingresos.component';


@NgModule({
    imports: [CommonModule, CatIngresosRoutingModule, PageHeaderModule],
    declarations: [ListaCatIngresosComponent, CrudCatIngresosComponent]
})
export class CatIngresosModule { }
