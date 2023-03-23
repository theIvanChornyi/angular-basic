import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructure]',
})
export class StructureDirective {
  @Input('appStructure') set ifNot(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templeteRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templeteRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
