import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { ModificationPage } from '../modification/modification';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
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
}
