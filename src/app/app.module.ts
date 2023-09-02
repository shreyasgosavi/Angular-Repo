import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SampleModuleModule } from './sample-module/sample-module.module';
import { SmartDumbComponentModule } from './smart-dumb-component/smart-dumb-component.module';
import { DataServiceService } from './services/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SampleModuleModule,
    SmartDumbComponentModule,
    HttpClientModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
