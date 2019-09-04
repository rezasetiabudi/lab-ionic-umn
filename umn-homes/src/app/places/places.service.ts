import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Serpong M-Town',
      '2BR apartement near Summarecon Mall Serpong',
      'https://d1pr4bk5d0i5im.cloudfront.net/images/c5/ed/360009924_69_1.jpg',
      700000000
    ),
    new Place(
      'p2',
      'Scientia Residence',
      'Near UMN with Many choices of foods around.',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123854_wh_3',
      1000000000
    ),
    new Place(
      'p3',
      'Serpong M-Town',
      '2BR apartement near Summarecon Mall Serpong',
      'https://d1pr4bk5d0i5im.cloudfront.net/images/c5/ed/360009924_69_1.jpg',
      700000000
    ),
    new Place(
      'p4',
      'Scientia Residence',
      'Near UMN with Many choices of foods around.',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123854_wh_3',
      1000000000
    )
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }


}

