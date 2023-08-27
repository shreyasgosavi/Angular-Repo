import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { sport } from '../models/SportModel';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{

  sports!: sport[];

  constructor(private dataService : DataServiceService){
  }

  ngOnInit(): void {
    this.dataService.getSportDetails().subscribe( (data : sport[])=>{
      this.sports = data;
    })
  }


  

}
