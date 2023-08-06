import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { BlankComponent } from "./components/blank/blank.component";
import { ImageSpyDirective } from './directives/image-spy.directive';
import { MuHaHaComponent } from './components/mu-ha-ha/mu-ha-ha.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, HighlightDirective, BlankComponent, ImageSpyDirective, MuHaHaComponent]
})
export class AppComponent {
  ugly = 'magenta';

  onVanished() {
    console.log('My highlight disappeared');
  }

  pictures = ['asdasdas.jpg', 'asdads.png'];

  constructor() {
    setTimeout(() => {
      this.ugly = 'orange'
    }, 5000);
  }
}
