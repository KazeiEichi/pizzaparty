import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-pizza',
  templateUrl: './ajout-pizza.component.html',
  styleUrls: ['./ajout-pizza.component.scss']
})
export class AjoutPizzaComponent{
  photos: string[] =[
    "pizza-1.jpg", "pizza-2.jpg", "pizza-3.jpg", "pizza-4.jpg"
  ]; 
  pizza: Pizza = new Pizza();
  constructor(
    private pizzaService: PizzaService,
    private router: Router
    ){}

  create(){
    this.pizzaService.createPizza(this.pizza).then(()=> this.router.navigate(['/pizzas']));
  }

}
