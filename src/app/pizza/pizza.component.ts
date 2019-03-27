import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  @Input() pizza: Pizza;
  quantity: number = 0;

  constructor(private pizzaService: PizzaService){}

  increasePrice(event) {
    this.quantity += event;
  }

  decreasePrice(event) {
    this.quantity -= event;

    if (this.quantity < 1) {
      this.pizza = null;
      this.quantity = 1;
    }
  }
  edit(pizza: Pizza){
    this.pizzaService.updatePizza(pizza);
  }
}
