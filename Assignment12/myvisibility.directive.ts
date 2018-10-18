import { Directive, ElementRef, Renderer2, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {


   @HostBinding('style.display') myVisable: string;
   @Input('hyd') flag = true;
   ngOnInit() {
     if(this.flag == true)
     this.myVisable = 'none';
     else
     this.myVisable = 'block';
   }

}
