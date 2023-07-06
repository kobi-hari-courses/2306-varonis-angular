import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-string-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent {
  @Input() options: string[] = [];

  @Input() selectedOption: string = '';

  @Output()
  selection = new EventEmitter<string>();

  selectOption(value: string) {
    this.selection.emit(value);
  }

}
