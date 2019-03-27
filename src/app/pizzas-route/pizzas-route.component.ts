import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizzas-route',
  templateUrl: './pizzas-route.component.html',
  styleUrls: ['./pizzas-route.component.scss']
})
export class PizzasRouteComponent implements OnInit {

  name  = 'webforce 3';
  SelectedPizza: Pizza ;
  PizzaList : Pizza[];

  constructor(private pizzaService: PizzaService) { 
  }
  ngOnInit(){
    // var self = this;
    // this.pizzaService.getPizza().then(function(pizzas){
    //   self.PizzaList = pizzas;
    // });
    // est égale à :
    this.pizzaService.getPizzas().then(pizzas => this.PizzaList = pizzas);
  }

  onSelect(pizza : Pizza): void{
    console.log(pizza);
    this.SelectedPizza = pizza;
  }
  
  delete(pizza: Pizza){
    this.pizzaService.deletePizza(pizza.id).then(()=>{
      this.PizzaList = this.PizzaList.filter(p => p !== pizza);
      this.SelectedPizza = null;
    });
  }
}
