import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { ModificationPage } from '../modification/modification';
import { PanierPage } from '../panier/panier';
import { AjoutPage } from '../ajout/ajout';
import { Pizza } from '../../model/pizza';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
paniertab = new Array<Pizza>();
mypizza : any;
  constructor(public navCtrl: NavController, private pizza: PizzaServiceProvider) {
   this.pizza.get().then((items: Array<any>) => {
     this.mypizza = items;
     console.log(this.mypizza);
   });
   this.pizza.getById(2).then((item: any) => {
     console.log(item);
   });
  }

modifpage(mapizza){
  this.navCtrl.push(ModificationPage, {
    param1: mapizza
});
}
delete(mapizza){
 this.pizza.deletebyid(mapizza.id);
}
panier(mapizza){
  this.paniertab.push(mapizza);
  console.log(this.paniertab);
  console.log(mapizza);

}
add(){
  console.log('ok');
  this.navCtrl.push(AjoutPage);
}
seepanier(){
  this.navCtrl.push(PanierPage, {
    param1: this.paniertab
});
}
}
