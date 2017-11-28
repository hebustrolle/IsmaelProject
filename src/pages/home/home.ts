import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private pizza: PizzaServiceProvider) {
   this.pizza.get().then((items: Array<any>) => {
     console.log(items);
   });
   this.pizza.getById(2).then((item: any) => {
     console.log(item);
   });
  }

}
