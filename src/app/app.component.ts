import { Component, OnInit } from '@angular/core';
import { sport } from './models/SportModel';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-proj1';
  language: String = "Angular";
  sports !: sport[];

  isStyled: boolean = false;
  inlineStyle: boolean = true;

  linkString :String ="form";

  constructor(private dataService : DataServiceService ){
    
  }
  ngOnInit(): void {
    this.dataService.getSportDetails().subscribe( (data: sport[]) => {
      this.sports = data;
    } );
  }

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
