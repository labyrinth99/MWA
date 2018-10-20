import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { GetdataService } from './getdata.service';
import { HttpClientModule } from '@angular/common/http';
import { ThankyouComponent } from './thankyou/thankyou.component';
// Import our Routes file
import { myRoutes } from "./app.routes";



@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    myRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
