import { Directive, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: 'img[slideshow]',
  standalone: true
})
export class SlideshowDirective implements OnChanges {
  @Input({required: true})
  slideshow: string[] = [];

  private index = 0;

  @HostListener('click')
  onClick() {
    this.index++;
    this.invalidate();
  }

  @HostBinding('class.slideshow')
  addClass = true;

  @HostBinding('attr.src')
  src='';


  invalidate() {
    this.index = this.index % this.slideshow.length; 
    this.src = this.slideshow[this.index];
  }


  constructor() { }

  ngOnChanges(): void {
    this.invalidate(); 
  }
}
