import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-proj1';

  language: String = "Angular";

  isStyled: boolean = false;

  catchElement(element :any){
    console.log("Element is "+element);
  }

  alterStyle(){
    if(this.isStyled){
      this.isStyled=false;
    }
    else{
      this.isStyled=true;
    }
  }

}
