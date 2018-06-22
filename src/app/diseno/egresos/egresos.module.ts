import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgresosRoutingModule } from './egresos-routing.module';
import { EgresosComponent } from './egresos.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, EgresosRoutingModule, PageHeaderModule],
    declarations: [EgresosComponent]
})
export class EgresosModule { }
