import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { SampleModuleModule } from './sample-module/sample-module.module';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SampleModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
