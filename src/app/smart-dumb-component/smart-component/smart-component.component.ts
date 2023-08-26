import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.css'],
})
export class SmartComponentComponent {
  valueToDisplay: String;
  valueFromChlid: String = '';

  constructor() {
    this.valueToDisplay = 'Data is good';
  }

  takeValue(stringValue: String) {
    console.log("Gotcha !");
    this.valueFromChlid = stringValue;
  }
}
