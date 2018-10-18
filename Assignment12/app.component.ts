import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-col [items]="array"></app-col>`
})
export class AppComponent implements OnInit{
  title = 'exer1';
  array: string[] = ['yellow', 'red', 'green'];
  ngOnInit(){}
}
