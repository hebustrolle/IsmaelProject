/**
 * @Author: HADJ Ismael <nonym0usse>
 * @Date:   2018-02-14T11:53:40+01:00
 * @Email:  contact@HADJ.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-02-14T17:58:29+01:00
 */



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
