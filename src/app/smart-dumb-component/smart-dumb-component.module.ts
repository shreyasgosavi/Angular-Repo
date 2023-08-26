import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartComponentComponent } from './smart-component/smart-component.component';
import { DumbComponentComponent } from './dumb-component/dumb-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SmartComponentComponent,
    DumbComponentComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DumbComponentComponent,
    SmartComponentComponent
  ]
})
export class SmartDumbComponentModule { }
