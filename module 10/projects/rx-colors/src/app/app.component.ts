import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, distinctUntilChanged, map, merge, mergeAll, switchAll } from 'rxjs';
import { ColorsService } from './services/colors.service';
import { Color } from './models/color.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private colorsService: ColorsService){}

  search$ = new BehaviorSubject<string>('');
  results$: Observable<Color[]> = this.search$.pipe(
    map(keyword => this.colorsService.search(keyword)), 
    switchAll()
  )

  true$ = this.search$.pipe(map(_ => true));
  false$ = this.results$.pipe(map(_ => false));
  isBusy$ = merge(this.true$, this.false$).pipe(
    distinctUntilChanged()
  );


}
