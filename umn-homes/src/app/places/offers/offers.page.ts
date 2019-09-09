import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: Place[];
  constructor(
    private menuCtrl: MenuController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
  }

  onOpenMenu(){
    this.menuCtrl.toggle('m1')
  }

}
