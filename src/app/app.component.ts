import { Component } from '@angular/core';

interface sport{
  sportName: String,
  players: number,
  hours: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-proj1';

  language: String = "Angular";

  isStyled: boolean = false;
  inlineStyle: boolean = true;

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


  sports: sport[]=[
    {
      sportName : 'Cricket' ,
      players :  11,
      hours :  7
    },
    {
      sportName : 'Football' ,
      players :  11,
      hours :  2
    }
]

}
