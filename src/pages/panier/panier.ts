/**
 * @Author: HADJ Ismael <nonym0usse>
 * @Date:   2018-02-14T11:53:40+01:00
 * @Email:  contact@HADJ.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-02-14T17:58:25+01:00
 */



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the PanierPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

  paniertab: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paniertab = this.navParams.data.param1;
  }

  suppPanier(mapizza){
    let i = 0;
    for (let pizz of this.paniertab) {
      i++
      if(mapizza.id == pizz.id){
        i--;
        this.paniertab.splice(i, 1);
        console.log(this.paniertab);
      }
    }
  }
}
