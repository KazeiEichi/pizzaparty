import { Component } from '@angular/core';
import { Pizza } from './models/pizza';


const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, photo: 'pizza-1.jpg' },
  { id: 2, name: '4 fromages', price: 13.99, photo: 'pizza-2.jpg' },
  { id: 3, name: 'Orientale', price: 11.99, photo: 'pizza-3.jpg' },
  { id: 4, name: 'Cannibale', price: 9.99, photo: 'pizza-4.jpg' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaparty';
  name  = 'webforce 3';
  SelectedPizza: Pizza ;
  PizzaList = PIZZAS;

  onSelect(pizza : Pizza): void{
    console.log(pizza);
    this.SelectedPizza = pizza;
  }
}
