import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../model/pizza';
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutPage');
  }

  pizzaadd = [];

  add(){

    //  let pizzainput = JSON.stringify(this.pizzaadd);
      this.pizza.price =+ this.pizzaadd['prix'];
      this.pizza.name = this.pizzaadd['nom'];
      this.pizza.desc = this.pizzaadd['desc'];
      this.pizzaprovid.addpizza(this.pizza);
  }

  camadd(){
    this.camera.getPicture().then((imagedata) =>{
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/png;base64,'+this.base64Image;
      console.log(this.pizza);
    });
  }

}
