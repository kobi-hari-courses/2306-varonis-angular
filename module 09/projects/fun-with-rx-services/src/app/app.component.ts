import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterReaderComponent } from "./components/counter-reader/counter-reader.component";
import { CounterWriterComponent } from "./components/counter-writer/counter-writer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, CounterReaderComponent, CounterWriterComponent]
})
export class AppComponent {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }
}
