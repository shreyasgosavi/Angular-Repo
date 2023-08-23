import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.css']
})
export class DumbComponentComponent {

  @Input()
  data !:String;

}
