import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleModuleModule } from './sample-module/sample-module.module';
import { SmartDumbComponentModule } from './smart-dumb-component/smart-dumb-component.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SampleModuleModule,
    SmartDumbComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
