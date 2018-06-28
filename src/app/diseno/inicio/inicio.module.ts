import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

import { StatModule } from '../../shared';

import { ChartsModule as Ng2Ingresos } from 'ng2-charts';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        InicioRoutingModule,        
        StatModule,CommonModule, Ng2Ingresos, PageHeaderModule        
    ],
    declarations: [
        InicioComponent,


    ]
})
export class InicioModule {}



