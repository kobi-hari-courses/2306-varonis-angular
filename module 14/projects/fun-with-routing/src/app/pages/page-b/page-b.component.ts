import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent {
  constructor() {
    const x= 10;
    const y = 20;
    const z = x + y;
  }

}
