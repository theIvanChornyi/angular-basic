import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostBinding]',
})
export class HostBindingDirective {
  @Input() userColor = 'blue';
  @HostBinding('style.color') color: string | null = null;

  @HostListener('mouseenter', ['$event']) onEnter(e: Event) {
    this.color = this.userColor;
  }
  @HostListener('mouseleave', ['$event']) onLeave(e: Event) {
    this.color = null;
  }
}
