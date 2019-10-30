import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MenuController } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
=======
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';
>>>>>>> week10


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  constructor(
<<<<<<< HEAD
    private menuCtrl: MenuController,
    private placesService: PlacesService
=======
   private placesService: PlacesService
>>>>>>> week10
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
  }
<<<<<<< HEAD

  onOpenMenu(){
    this.menuCtrl.toggle('m1')
  }
  
=======
  
  onFilterUpdate(evt: CustomEvent<SegmentChangeEventDetail>){
    console.log(evt.detail);
  }
>>>>>>> week10
}
