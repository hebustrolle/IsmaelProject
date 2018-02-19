/**
 * @Author: HADJ Ismael <nonym0usse>
 * @Date:   2018-02-14T11:53:40+01:00
 * @Email:  contact@HADJ.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-02-14T17:58:36+01:00
 */



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../model/pizza';
import { HomePage } from '../home/home';
/**
* Generated class for the AjoutPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html',
})
export class AjoutPage {
  public base64Image: string;
  pizza : Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaprovid: PizzaServiceProvider,  private camera: Camera) {
  }


  pizzaadd = [];

  add(){

    this.pizza.price =+ this.pizzaadd['prix'];
    this.pizza.name = this.pizzaadd['nom'];
    this.pizza.desc = this.pizzaadd['desc'];
    this.pizzaprovid.addpizza(this.pizza).then((item) =>{
      this.navCtrl.push(HomePage);
    });
  }

  camadd(){
    this.camera.getPicture().then((imagedata) =>{
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/png;base64,'+this.base64Image;
      console.log(this.pizza);
    });
  }

}
