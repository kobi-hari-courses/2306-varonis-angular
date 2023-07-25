import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscribe<T>(observable: Observable<T>,  id: string) {
    return observable.subscribe({
      next: val => console.log(`${id} next ${val}`),
      complete: () => console.log(`${id} complete`),
      error: err => console.log(`${id} error ${err}`)
    })
  }

  go() {
    const source = interval(1000);
    this.subscribe(source, 'interval');

    const mapped = source.pipe(
      map(x => x * 2)
    );

    this.subscribe(mapped, 'mapped');

    const taked = mapped.pipe(
      take(2)
    );

    this.subscribe(taked, 'take');

  }
}
