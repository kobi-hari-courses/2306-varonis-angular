import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent {
  @Input({required: true})
  header: string = '';

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
