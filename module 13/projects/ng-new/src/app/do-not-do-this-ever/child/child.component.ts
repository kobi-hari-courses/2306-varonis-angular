import { Component, DestroyRef, Injector, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClass } from '../base-class';
import { YourService } from 'src/app/services/your.service';
import { MyService } from 'src/app/services/my.service';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends BaseClass {
  constructor(
    private yourService: YourService) {
      super();

  }

  onClick() {
    const myInjector = Injector.create({
      providers: []
    });

    runInInjectionContext(myInjector, () => {
    });


  }

}
