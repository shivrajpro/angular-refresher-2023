import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnHover]'
})
export class BtnHoverDirective {

  constructor(private element: ElementRef, private renderer:Renderer2) { }

  // used to bind the DOM property of element
  @HostBinding('style.backgroundColor') bgColor = 'white';
  @HostBinding('style.color') textColor = 'black';

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor = 'black';
    this.textColor = 'white';
  }

  @HostListener('mouseout') onMouseLeave(){
    this.bgColor = 'white';
    this.textColor = 'black';
  }

}
