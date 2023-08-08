import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BlankComponent } from './components/blank/blank.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SharedModule, BlankComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
