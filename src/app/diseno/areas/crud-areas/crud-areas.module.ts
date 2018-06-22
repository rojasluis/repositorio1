import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudAreasRoutingModule } from './crud-areas-routing.module';
import { CrudAreasComponent } from './crud-areas.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [CommonModule, CrudAreasRoutingModule, PageHeaderModule],
   
    declarations: [CrudAreasComponent]
})
export class CrudAreasModule { }
