import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandsontableComponent } from './common/handsontable/handsontable.component';
import { HotTableModule } from '@handsontable/angular';

@NgModule({
  declarations: [
    AppComponent,
    HandsontableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
