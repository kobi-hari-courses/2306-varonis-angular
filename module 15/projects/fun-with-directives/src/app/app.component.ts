import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { BlankComponent } from "./components/blank/blank.component";
import { ImageSpyDirective } from './directives/image-spy.directive';
import { MuHaHaComponent } from './components/mu-ha-ha/mu-ha-ha.component';
import { SlideshowDirective } from './directives/slideshow.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, SlideshowDirective, HighlightDirective, BlankComponent, ImageSpyDirective, MuHaHaComponent]
})
export class AppComponent {
  ugly = 'magenta';

  onVanished() {
    console.log('My highlight disappeared');
  }

  pictures = [
    'https://images.unsplash.com/photo-1604725333736-1f962a6218d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww&w=1000&q=80', 
    'https://images.unsplash.com/photo-1591909225194-3b804fc84477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwc3Vuc2V0fGVufDB8fDB8fHww&w=1000&q=80', 
    'https://i.pinimg.com/originals/2a/3e/55/2a3e5559cc547e735d0862f92ad52e5c.jpg', 
    'https://i.pinimg.com/236x/64/2b/95/642b95af94449e6271cb3afc99f94cd2--beautiful-sunset-beautiful-places.jpg'
  ];

  constructor() {
    setTimeout(() => {
      this.ugly = 'orange'
    }, 5000);
  }
}
