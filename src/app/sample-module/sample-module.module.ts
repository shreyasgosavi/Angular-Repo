import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherStatsComponent } from './weather-stats/weather-stats.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';



@NgModule({
  declarations: [
    WeatherStatsComponent,
    FormValidationsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WeatherStatsComponent,
    FormValidationsComponent
  ]
})
export class SampleModuleModule { }
