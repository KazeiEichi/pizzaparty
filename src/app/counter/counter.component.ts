import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent{
@Input() value: number = 0;
@Output() increase = new EventEmitter();
@Output() decrease = new EventEmitter();

ngOnInit(){
  this.increase.emit(this.value);
}
onMore(){
  if(this.value < 12){
    this.value ++;
    this.increase.emit(1);
  } 
}
onLess(){
  if(this.value > 0){
    this.value --;
    this.decrease.emit(1);
  }
}

}
