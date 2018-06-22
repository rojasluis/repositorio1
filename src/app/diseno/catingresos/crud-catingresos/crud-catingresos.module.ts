import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudCatIngresosRoutingModule } from './crud-catingresos-routing.module';
import { CrudCatIngresosComponent } from './crud-catingresos.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [CommonModule, CrudCatIngresosRoutingModule, PageHeaderModule],
   
    declarations: [CrudCatIngresosComponent]
})
export class CrudCatIngresosModule { }







