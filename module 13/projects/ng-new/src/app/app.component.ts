import { Component, Injector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyService } from './services/my.service';
import { initMyService } from './init-my-service';
import { interval } from 'rxjs';
import { ChildComponent } from "./do-not-do-this-ever/child/child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ChildComponent]
})
export class AppComponent implements OnInit {
  myService!: MyService;
  injector = inject(Injector);

  showChild = true;

  constructor() {
    initMyService();
  }

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.myService = inject(MyService);
      console.log(this.myService);  
    })
  }
}
