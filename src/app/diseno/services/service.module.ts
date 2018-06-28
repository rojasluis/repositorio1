import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    EgresosService,
    CrudService
} from './service.index';


@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
      EgresosService,
      CrudService
    ],
    declarations: []
  })
  export class ServiceModule { }