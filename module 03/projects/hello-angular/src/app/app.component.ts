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
  keyword: string = '';
  isBusy: boolean = false;
  results: string[] = [];

  setKeyword(value: string): void {
    console.log('Setting keyword to ', value);
    this.keyword = value;
  }

  search() {
    this.isBusy = true;
    this.results = [];
    setTimeout(() => {
      this.results = [
        this.keyword.toLowerCase(), 
        this.keyword.toUpperCase(), 
        `**${this.keyword}**`
      ];

      this.isBusy = false;      
    }, 3000);
  }
}
