import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myIf]',
  standalone: true,
})
export class IfDirective {
  _condition = false;

  @Input()
  set myIf(value: boolean) {
    this._condition = value;
    this.invalidate();
  }

  private invalidate() {
    if (this._condition) {
        if (this.vcr.length === 0) {
            this.vcr.createEmbeddedView(this.template);
        }
    } else {
        if (this.vcr.length > 0) {
            this.vcr.clear();
        }
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
  }
}
