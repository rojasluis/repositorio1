import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { PageHeaderModule } from '../../../shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
    imports: [CommonModule, PageHeaderModule, BsDropdownModule.forRoot()],
    declarations: [HeaderComponent]
})
export class BsheaderModule { }




