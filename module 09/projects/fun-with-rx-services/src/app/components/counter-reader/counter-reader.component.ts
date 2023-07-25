import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent {
  constructor(
    private counterService: CounterService, 
    ) {}

  value$: Observable<number> = this.counterService.getValue();

}
