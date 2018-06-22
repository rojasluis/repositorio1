import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    EgresosService 
} from './service.index';

@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
      EgresosService
    ],
    declarations: []
  })
  export class ServiceModule { }