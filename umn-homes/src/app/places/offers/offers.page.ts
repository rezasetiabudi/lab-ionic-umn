import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { MenuController, IonItemSliding } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];
  constructor(
    private menuCtrl: MenuController,
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.offers = this.placesService.getPlaces();
  }

  onOpenMenu(){
    this.menuCtrl.toggle('m1')
  }

  editOffer(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id])
  }

}
