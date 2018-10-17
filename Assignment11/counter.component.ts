import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div class="main">
  <button (click)='minus()'>-</button>{{counterValue}}<button (click)='plus()'>+</button>
  </div>`,
  styles: ['div{border: 1px solid black}']
})
export class CounterComponent implements OnInit {

  @Input() counterValue: number;
  @Output() counterChange = new EventEmitter();
  constructor() {
    this.counterValue = 0;
    this.counterChange.emit(this.counterValue);
  }
  minus() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue);
  }
  plus() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
  }

}
