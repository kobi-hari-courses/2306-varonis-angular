import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: '[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrls: ['./expander-toggle.component.css']
})
export class ExpanderToggleComponent {
  constructor(@Optional() public expander: ExpanderComponent){}


  get isClosed(): boolean {
    return this.expander?.isOpen === false;
  }

  get isOpen(): Boolean {
    return this.expander?.isOpen === true;
  }
}
