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

  constructor(private dataService : DataServiceService ){
    
  }
  ngOnInit(): void {
    this.sports = this.dataService.getSportDetails();
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
