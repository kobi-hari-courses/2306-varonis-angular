import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'green', 'blue', 'magenta', 'cyan', 'orange', 'teal', 'brown', 'black'];
  fonts = ['Arial', 'Verdana', 'Segoe UI', 'Consolas', 'Times new roman', 'David'];
  sizes = ['1rem', '1.5rem', '2rem', '4rem', '16rem'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }
}
