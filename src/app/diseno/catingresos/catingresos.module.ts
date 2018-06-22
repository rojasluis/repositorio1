import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatIngresosRoutingModule } from './catingresos-routing.module';
import { CatIngresosComponent } from './catingresos.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, CatIngresosRoutingModule, PageHeaderModule],
    declarations: [CatIngresosComponent]
})
export class CatIngresosModule { }
