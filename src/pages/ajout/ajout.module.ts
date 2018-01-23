import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutPage } from './ajout';
import {Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    AjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutPage),
  ],
  providers: [
        Camera
  ]
})
export class AjoutPageModule {}
