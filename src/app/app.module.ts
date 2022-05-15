import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAudAv-DE_OXe16bf6o2p10BzL3fj2vdgQ",
  authDomain: "appback1-cc6e5.firebaseapp.com",
  projectId: "appback1-cc6e5",
  storageBucket: "appback1-cc6e5.appspot.com",
  messagingSenderId: "367704798061",
  appId: "1:367704798061:web:67bb7e2c9e6c2bb9c82064",
  measurementId: "G-VNT4TQ634B"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  AngularFirestoreModule,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
