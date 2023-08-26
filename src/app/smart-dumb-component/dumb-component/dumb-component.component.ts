import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css']
})
export class DumbComponentComponent {

  @Input()
  data !:String;

  @Output()
  valueToSend : EventEmitter<String> = new EventEmitter();

  value :String = "Default Value";

  sendValue(){
    console.log("HERE");
    this.valueToSend.emit(this.value);
  }
}
