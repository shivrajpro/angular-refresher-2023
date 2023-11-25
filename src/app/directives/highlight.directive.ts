import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:'[appHighlight]'
})
export class HighlightDirective implements OnInit{
  constructor(private elRef:ElementRef, private renderer:Renderer2){}

  ngOnInit(): void {
    // this.elRef.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }
  @HostListener('mouseout') onMouseLeave(){
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }
}
