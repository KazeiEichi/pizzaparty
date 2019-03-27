import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, photo: 'pizza-1.jpg' },
  { id: 2, name: '4 fromages', price: 13.99, photo: 'pizza-2.jpg' },
  { id: 3, name: 'Orientale', price: 11.99, photo: 'pizza-3.jpg' },
  { id: 4, name: 'Cannibale', price: 9.99, photo: 'pizza-4.jpg' }
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient){}

  getPizzas():Promise<Pizza[]>{
    return this.http.get('api/pizzas').toPromise().then(response => response as Pizza[]);
  }
  getPizza(id: number):Promise<Pizza>{
    return this.getPizzas().then(
      pizzas => pizzas.find(pizza => pizza.id === id)
    );
  }
  countPizza(): Promise<number>{
    return Promise.resolve(PIZZAS.length);
  }
  createPizza(pizza: Pizza): Promise<Pizza>{
    return this.http.post('api/pizzas', pizza).toPromise().then(response => response as Pizza);
  }
  updatePizza(pizza: Pizza): Promise<Pizza>{
    return this.http.put('api/pizzas/'+pizza.id, pizza).toPromise().then(
      response => response as Pizza
    );
  }
  deletePizza(id: number): Promise<void>{
    return this.http.delete('api/pizzas/'+id).toPromise().then(()=> null);
  }
}
