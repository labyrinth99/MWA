import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OlympicsComponent} from './olympics.component'
import { RouterModule, Routes } from "@angular/router";

const MY_ROUTES: Routes = [{ path: 'olympics', component: OlympicsComponent }];

@NgModule({
  declarations: [
    AppComponent, OlympicsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
