import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { quizFeature } from 'src/app/features/quiz/redux/quiz.feature';

@Component({
  selector: 'app-quiz-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent {
  constructor(private store: Store){}
  entries$ = this.store.select(quizFeature.selectQuizEntries);

}
