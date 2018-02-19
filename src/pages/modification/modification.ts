/**
 * @Author: HADJ Ismael <nonym0usse>
 * @Date:   2018-02-14T11:53:40+01:00
 * @Email:  contact@HADJ.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-02-14T17:58:22+01:00
 */



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { Camera } from '@ionic-native/camera';
import { Pizza } from '../../model/pizza';
import { HomePage } from '../home/home';
/**
 * Generated class for the ModificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modification',
  templateUrl: 'modification.html',
})
export class ModificationPage {
public base64Image: string;

pizza : Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaprovid: PizzaServiceProvider, private camera: Camera) {
    this.pizza = this.navParams.data.param1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificationPage');
  }

  modif(){
    this.pizzaprovid.modifbyid(this.pizza).then((item) => {
    this.navCtrl.push(HomePage);
    });
  }

  cammodif(){
    this.camera.getPicture().then((imagedata) =>{
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/png;base64,'+this.base64Image;
      console.log(this.pizza);
    });
  }



}
