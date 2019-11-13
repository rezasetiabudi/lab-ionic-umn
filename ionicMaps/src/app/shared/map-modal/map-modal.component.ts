import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onChooseLocation(event: any){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

}
