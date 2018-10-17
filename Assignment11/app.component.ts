import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter counterValue='{{ComponentCounterValue}}' (counterChange)='myHandler($event)'>bla</app-counter>
  <p>ComponentCounterValue:{{ComponentCounterValue}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 10;
  ComponentCounterValue = 100;
  myHandler(e: number) {
    this.ComponentCounterValue = e;
  }
}
