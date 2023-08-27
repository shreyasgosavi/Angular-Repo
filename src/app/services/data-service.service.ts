import { Injectable } from '@angular/core';
import { sport } from '../models/SportModel';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  getSportDetails(): sport[] {
    return [
      {
        sportName: 'Cricket',
        players: 11,
        hours: 7,
      },
      {
        sportName: 'Football',
        players: 11,
        hours: 2,
      },
    ];
  }
}
