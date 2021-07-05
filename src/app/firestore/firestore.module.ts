import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirestorePageRoutingModule } from './firestore-routing.module';

import { FirestorePage } from './firestore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirestorePageRoutingModule
  ],
  declarations: [FirestorePage]
})
export class FirestorePageModule {}
