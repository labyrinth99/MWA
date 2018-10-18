import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {


  @Output() colorData= new EventEmitter();


  constructor() { }

  @HostListener('click') bla() {
    this.currentColor='red';
    this.colorData.emit(this.currentColor);
  }
  @HostBinding('style.color') currentColor: string;


}
