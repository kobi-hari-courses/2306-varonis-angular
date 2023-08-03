import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { quizFeature } from './features/quiz/redux/quiz.feature';
import { userQuizActions } from './redux/quiz.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store){}

  question$ = this.store.select(quizFeature.selectCurrentQuestion);

  answerQuestion(index: number) {
    const action = userQuizActions.answerCurrentQuestion({index});
    this.store.dispatch(action);
  }
}
