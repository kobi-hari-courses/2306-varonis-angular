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

  createPromise(delay: number): Promise<number> {
    return new Promise(res => setTimeout(() => res(42), delay));
  }

  // go() {
  //   const p = this.createPromise();

  //   const q = p.then(val => {
  //     console.log(val);
  //     return val.toString();
  //   })
  // }


  async go() {
    const q = this.createPromise(3000);
    const p = this.createPromise(4000);

    const promises = [p, q];
    const pall = Promise.all(promises);
    const all = await pall;

    const pfirst = Promise.race([
      p.then(val => ({id: 1, value: val})), 
      q.then(val => ({id: 2, value: val}))
    ]);
    const first = await pfirst;


    console.log('A');
    await this.start();
    console.log('B');
  }

  async start(): Promise<void> {
    console.log(1);
    const p = this.createPromise(3000);
    console.log(2);
    const res = await p;
    console.log(3);
  }
}
