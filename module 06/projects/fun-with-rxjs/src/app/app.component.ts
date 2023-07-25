import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Observer, from, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`Observer ${id} next ${val}`), 
      complete: () => console.log(`Observer ${id} complete`), 
      error: err => console.log(`Observer ${id} error ${err}`)
    }
  }

  createOfObservable(): Observable<number> {
    return of(42, 100, 200);
  }

  createTimerObservable(): Observable<number> {
    return timer(3000, 1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable(observer => {
        observer.next(1);
        observer.next(1);
        setTimeout(() => observer.next(2), 1000);
        setTimeout(() => observer.next(3), 2000);
        setTimeout(() => observer.next(5), 3000);
        setTimeout(() => observer.next(8), 4000);
        setTimeout(() => observer.next(13), 5000);
        setTimeout(() => observer.complete(), 8000);
        setTimeout(() => {
          console.log('Magia Lesham!!!');
          observer.next(21)
        }, 10000);


    });
  }

  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');

    const observable = this.createCustomObservable();
    console.log('Subscribing A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscrbing B');
      observable.subscribe(observerB)
    }, 2500);

  }
}
