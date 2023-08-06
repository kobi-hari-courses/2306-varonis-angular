import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent {
  @Input()
  id: string = '';


  // constructor(private route: ActivatedRoute){}

  // id$ = this.route.params.pipe(
  //   map(prm => String(prm['id']))
  // )

}
