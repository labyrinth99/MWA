import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-col',
  template: `
  <p>Initial Array</p>
  <ul appMyvisibility [hyd]="false">
  <li *ngFor="let item of items" >{{item}}</li>
  </ul>
  <p>Hidden Array</p>
  <ul>
  <li *ngFor="let item of items" appMyvisibility [hyd]="true">{{item}}</li>
  </ul>
  <p>Colors</p>
  <p appMynewcolor (colorData)="printit($event)" >Click me To change color
  </p>
  <span *ngIf="flag==true">An element changed its color to {{currentColor}}</span>
  `
})
export class ColComponent{

  @Input() public items: string[];
  flag= false;
  currentColor: string ;
   printit(e: string){
     this.currentColor = e;
     this.flag =true;
   }

}
