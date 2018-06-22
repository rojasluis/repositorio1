import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudCatEgresosRoutingModule } from './crud-categresos-routing.module';
import { CrudCatEgresosComponent } from './crud-categresos.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [CommonModule, CrudCatEgresosRoutingModule, PageHeaderModule],
   
    declarations: [CrudCatEgresosComponent]
})
export class CrudCatEgresosModule { }







