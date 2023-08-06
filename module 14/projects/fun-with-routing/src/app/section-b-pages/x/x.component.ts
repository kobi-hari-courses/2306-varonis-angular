import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MY_NUMBER } from 'src/app/tokens/my-number.token';

@Component({
  selector: 'app-x',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent {
  myNumber = inject(MY_NUMBER);

}
