import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  /* to implement our own ngIf we need to things. what and where */
  // 1. Access to the DOM element which we want to add/remove
  // 2. Place/Container of the element where wish to add/remove
  constructor(private template:TemplateRef<any>, private container:ViewContainerRef) { }

  @Input() set appMyIf(condition:boolean){
    console.log('in my if');
    
    if(condition) this.container.createEmbeddedView(this.template);
    else this.container.clear();
  }
}
