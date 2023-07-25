import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, from, of, timer } from 'rxjs';

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

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(1);
    subject.next(1);
    setTimeout(() => subject.next(2), 1000);
    setTimeout(() => subject.next(3), 2000);
    setTimeout(() => subject.next(5), 3000);
    setTimeout(() => subject.next(8), 4000);
    setTimeout(() => subject.next(13), 5000);
    setTimeout(() => subject.complete(), 8000);
    setTimeout(() => {
      console.log('Magia Lesham!!!');
      subject.next(21)
    }, 10000);

    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(1);

    subject.next(1);
    setTimeout(() => subject.next(2), 1000);
    setTimeout(() => subject.next(3), 2000);
    setTimeout(() => subject.next(5), 3000);
    setTimeout(() => subject.next(8), 4000);
    setTimeout(() => subject.next(13), 5000);
    setTimeout(() => subject.complete(), 8000);
    setTimeout(() => {
      console.log('Magia Lesham!!!');
      subject.next(21)
    }, 10000);

    return subject;
  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>();
    subject.next(1);
    subject.next(1);
    setTimeout(() => subject.next(2), 1000);
    setTimeout(() => subject.next(3), 2000);
    setTimeout(() => subject.next(5), 3000);
    setTimeout(() => subject.next(8), 4000);
    setTimeout(() => subject.next(13), 5000);
    setTimeout(() => subject.complete(), 8000);
    setTimeout(() => {
      console.log('Magia Lesham!!!');
      subject.next(21)
    }, 10000);

    return subject;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createCustomReplaySubject();
    console.log('Subscribing A');
    observable.subscribe(observerA);

    setTimeout(() => {
      console.log('Subscrbing B');
      observable.subscribe(observerB)
    }, 2500);

    setTimeout(() => {
      console.log('Subscrbing C');
      observable.subscribe(observerC)
    }, 12500);

  }
}
