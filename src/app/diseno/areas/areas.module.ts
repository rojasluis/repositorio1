import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, AreasRoutingModule, PageHeaderModule],
    declarations: [AreasComponent]
})
export class AreasModule { }
