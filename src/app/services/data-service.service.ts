import { Injectable } from '@angular/core';
import { sport } from '../models/SportModel';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


const dataUrl = ' http://localhost:3000/sport';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private httpClient : HttpClient) {}

  getSportDetails() :Observable<sport[]>{
    return this.httpClient.get<sport[]>(dataUrl);
  }


  // getSportDetails(): sport[] {
  //   return [
  //     {
  //       sportName: 'Cricket',
  //       players: 11,
  //       hours: 7,
  //     },
  //     {
  //       sportName: 'Football',
  //       players: 11,
  //       hours: 2,
  //     },
  //   ];
  // }
}
