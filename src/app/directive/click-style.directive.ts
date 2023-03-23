import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
})
export class ClickStyleDirective {
  @Input('appHoverStyle') fontSize = 14;
  @Input() fontWeight = 'regular';
  constructor(private el: ElementRef<HTMLDivElement>, private render: Renderer2) {}
  @HostListener('click', ['$event']) onHover(e: Event) {
    const elStyle = window.getComputedStyle(this.el.nativeElement);
    if (this.fontSize > Number.parseInt(elStyle.fontSize)) {
      this.render.setStyle(this.el.nativeElement, 'font-size', `${this.fontSize}px`);
      this.render.setStyle(this.el.nativeElement, 'font-weight', this.fontWeight);
    }
  }
}
