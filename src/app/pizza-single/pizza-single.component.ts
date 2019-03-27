import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../models/pizza';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  pizza: Pizza;
  total: number;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private location: Location,
    private router: Router
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pizzaService.getPizza(+params.id).then(pizza=>{ this.pizza = pizza;
      });
      this.pizzaService.countPizza().then(total => this.total = total);
    });
  }
  goBack(){
    this.location.back();
  }
  next(){
    let target = this.pizza.id != this.total ? this.pizza.id +1 : 1;
    this.router.navigate(["/pizza/", target]);
  }
  prev(){
    let target = this.pizza.id != 1 ? this.pizza.id -1 : this.total;
    this.router.navigate(["/pizza/", target]);
  }

}
