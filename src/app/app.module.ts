/**
 * @Author: HADJ Ismael <nonym0usse>
 * @Date:   2018-02-14T11:53:40+01:00
 * @Email:  contact@HADJ.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-02-14T17:58:43+01:00
 */



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ModificationPageModule } from '../pages/modification/modification.module';
import { PanierPageModule } from '../pages/panier/panier.module';
import { AjoutPageModule } from '../pages/ajout/ajout.module';
import { Vibration } from '@ionic-native/vibration';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaServiceProvider } from '../providers/pizza-service/pizza-service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    ModificationPageModule,
    PanierPageModule,
    AjoutPageModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaServiceProvider
  ]
})
export class AppModule {}
