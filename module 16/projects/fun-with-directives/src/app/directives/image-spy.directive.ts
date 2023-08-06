import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true
})
export class ImageSpyDirective {
  @Input()
  @HostBinding('attr.title')
  src: string = '';

  constructor() { 
    console.log('Image spy directive created');
  }

}
