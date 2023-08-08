import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpanderToggleDirective } from './expander-toggle.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements AfterContentInit {

  @ContentChild(ExpanderToggleDirective)
  childToggleDirective?: ExpanderToggleDirective;

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
  }

  ngAfterContentInit(): void {
    console.log('my child toggle directive', this.childToggleDirective);
  }

}
