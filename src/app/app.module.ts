import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import firebase from "firebase/app";
import "firebase/firestore";
//import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: '* api key *',
  authDomain: " domain ",
  projectId: " project id ",
  storageBucket: "storage bucket",
  messagingSenderId: "sender id",
  appId: "app id",
  measurementId: "measurement id"
});



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
