import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather-stats',
  templateUrl: './weather-stats.component.html',
  styleUrls: ['./weather-stats.component.css']
})
export class WeatherStatsComponent implements OnInit, AfterViewInit{


  @ViewChild("weatherPara") weatherPara = ElementRef;

  dayScore : Number;

  weatherStats :any = {
    temperature: Number,
    humidity: Number,
    precepitation: Number,
    day: String
  };

  ngOnInit(): void {
    console.log("Weather-Stats is initialized");
  }

  constructor(){
    
    this.weatherStats = {
      temperature : 25,
      humidity: 60,
      precipatation: 76,
      day : 'Sunny'
    }

    this.dayScore = 1;
    
  }
  ngAfterViewInit(): void {
    
    console.log("Element of DOM using Angular "+this.weatherPara);

  }


}
