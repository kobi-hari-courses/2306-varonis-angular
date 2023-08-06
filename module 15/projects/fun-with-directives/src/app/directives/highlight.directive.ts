import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges{
  clickedSoFar = 0;

  @Input()
  highlight: string = 'yellow';

  @Output()
  vanished = new EventEmitter<void>();

  @HostBinding('style.background-color')
  reka = this.highlight;

  @HostBinding('class.highlighted')
  isHighlighted = true;

  @HostListener('click')
  onClick() {
    this.clickedSoFar++;
    this.invalidate();
    if (this.clickedSoFar === 3) {
      this.vanished.emit();
    }

  }

  private invalidate() {
    const clr = this.highlight || 'yellow';
    this.reka = (this.clickedSoFar < 3) ? clr : '';
    this.isHighlighted = (this.clickedSoFar < 3);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }


  constructor(
      private elem: ElementRef<any>, 
      private renderer: Renderer2
      ) {
    // DONT DO THIS!!! BAD BAD
    // elem.nativeElement.style.backgroundColor = 'pink';
    // this.renderer.setStyle(elem.nativeElement, 'background-color', 'lime');
  }

}
