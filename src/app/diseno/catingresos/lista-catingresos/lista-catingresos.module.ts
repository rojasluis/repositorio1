import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../../shared';
import { ListaCatIngresosRoutingModule } from './lista-catingresos-routing.module';
import { ListaCatIngresosComponent } from './lista-catingresos.component';

@NgModule({
    imports: [CommonModule, ListaCatIngresosRoutingModule, PageHeaderModule],
    declarations: [ListaCatIngresosComponent]
})
export class ListaCatIngresosModule {}
