import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnDestroy {
  value: number = -1;

  sub: Subscription | null = null;


  constructor(
    private counterService: CounterService, 
    private changeDetector: ChangeDetectorRef
    ) {
    this.sub = this.counterService.getValue().subscribe((val) => {
      console.log('Value changed to ', val);
      this.value = val;
      this.changeDetector.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
