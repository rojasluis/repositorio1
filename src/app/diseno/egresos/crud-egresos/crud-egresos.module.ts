import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared';
import { CrudEgresosRoutingModule } from './crud-egresos-routing.module';
import { CrudEgresosComponent } from './crud-egresos.component';

@NgModule({
    imports: [CommonModule, CrudEgresosRoutingModule, PageHeaderModule],
    declarations: [CrudEgresosComponent]
})
export class CrudEgresosModule {}
