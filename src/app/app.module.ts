import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
