import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDirective } from './directives/if.directive';
import { RepeatDirective } from './directives/repeat.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IfDirective, RepeatDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = ['Sunday', 'Monday', 'Tusday', 'Wednesday'];
  showNumbers = true;

  counter = 5;
  firstIndex = 10;
}
