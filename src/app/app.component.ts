import { Component } from '@angular/core';

export class Pizza {
  id : number;
  name: string;
  price : number;
  photo : string;
}
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
  pizza: Pizza = {
    id: 1,
    name: 'Reine',
    price : 12.99,
    photo : ''
  };
  PizzaList = PIZZAS;
}
