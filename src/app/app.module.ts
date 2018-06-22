import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// AoT requires an exported function for factories


@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
       
        AppRoutingModule
     
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
