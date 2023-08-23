import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartComponentComponent } from './smart-component/smart-component.component';
import { DumbComponentComponent } from './dumb-component/dumb-component.component';



@NgModule({
  declarations: [
    SmartComponentComponent,
    DumbComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SmartDumbComponentModule { }
