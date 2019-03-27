import { Component} from '@angular/core';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent{
  total: number = 0;
  OnIncrement(event){
    this.total += parseInt(event);
  }
  OnDecrement(event){
    this.total -= event;
  }
}
