import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(
    private el: ElementRef<HTMLParagraphElement>,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'aqua');
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(e: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', null);
  }
}
