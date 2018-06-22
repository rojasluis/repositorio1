import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatEgresosRoutingModule } from './categresos-routing.module';
import { CatEgresosComponent } from './categresos.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, CatEgresosRoutingModule, PageHeaderModule],
    declarations: [CatEgresosComponent]
})
export class CatEgresosModule { }
