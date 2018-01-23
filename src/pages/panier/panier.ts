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
      this.afficher();
  }

  afficher(){
    console.log(this.paniertab);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PanierPage');
  }

}
