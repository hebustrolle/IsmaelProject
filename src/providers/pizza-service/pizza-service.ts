/**
 * @Author: HADJ Ismael <nonym0usse>
 * @Date:   2018-02-14T11:53:40+01:00
 * @Email:  contact@HADJ.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-02-14T17:58:07+01:00
 */



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


  private readonly url = "http://kim.jcatania.io:3000/pizza/";

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

        deletebyid(id: number){
          return new Promise<Pizza>(
            resolve => {
              this.http.delete(this.url+id).subscribe((data:any) => {
                resolve();
              });
            });

          }

          modifbyid(pizza: Pizza){
            return new Promise<Pizza>(
              resolve => {
                this.http.patch(this.url+pizza.id, pizza).subscribe((data:any) => {
                  resolve();
                });
              });

            }

            addpizza(pizza: Pizza){
              return new Promise<Pizza>(
                resolve => {
              this.http.post(this.url, pizza).subscribe((data:any) => {
                resolve();
              });
            });
            }

          }
