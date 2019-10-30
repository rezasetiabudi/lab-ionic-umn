import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPage } from './place-detail.page';
<<<<<<< HEAD
=======
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
>>>>>>> week10

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD
  declarations: [PlaceDetailPage]
=======
  declarations: [PlaceDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent]
>>>>>>> week10
})
export class PlaceDetailPageModule {}
