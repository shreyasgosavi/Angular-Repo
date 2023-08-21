import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStatsComponent } from './weather-stats/weather-stats.component';



@NgModule({
  declarations: [
    WeatherStatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherStatsComponent
  ]
})
export class SampleModuleModule { }
