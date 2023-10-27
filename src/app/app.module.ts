import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCLcomV7DjEHvFTgpdp6K5sxmGTA8Lgujc",
        authDomain: "appchate-75865.firebaseapp.com",
        projectId: "appchate-75865",
        storageBucket: "appchate-75865.appspot.com",
        messagingSenderId: "254044659724",
        appId: "1:254044659724:web:e5b033e69aab1ed5a1ce29",
        measurementId: "G-SFW92QPBLT"
      })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
