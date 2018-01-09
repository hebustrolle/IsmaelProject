import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificationPage } from './modification';
import {Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    ModificationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificationPage),
  ],
  providers: [
        Camera
  ]
})
export class ModificationPageModule {}
