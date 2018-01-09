import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../model/pizza';
/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaServiceProvider {


  private readonly url = "pizza.json";

  constructor(public http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

  get(){
    let rt: Array<Pizza> = new Array<Pizza>();
    return new Promise<Array<Pizza>>(
      resolve => {
        this.http.get(this.url).subscribe((data:Array<any>) => {

          for(let i=0; i<data.length; i++){
            rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']))
          }
            resolve(rt);});
      });

  }


    getById(id :number){

      let rtbyid: Pizza;
      return new Promise<Pizza>(
        resolve => {
          this.http.get(this.url+id).subscribe((data:any) => {
             rtbyid = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price']);
              resolve(rtbyid);
            });
        });

    }

}
