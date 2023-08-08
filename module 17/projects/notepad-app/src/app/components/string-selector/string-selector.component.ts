import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTemplateDirective } from './item-template.directive';

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

  @ContentChild(ItemTemplateDirective)
  itemTemplate?: ItemTemplateDirective;

  @Output()
  selection = new EventEmitter<string>();

  selectOption(value: string) {
    this.selection.emit(value);
  }

}
