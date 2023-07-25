import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('answerBox')
  answerBox!: ElementRef<HTMLInputElement>;

  constructor(private quizService: QuizService){}

  previousQuestion$ = this.quizService.previousQuestion$;
  previousAnswer$ = this.quizService.previousAnswer$;
  isPreviousCorrect$ =  this.quizService.isPreviousQuestionCorrect$;
  currentQuestion$ = this.quizService.currentQuestion$;
  score$ = this.quizService.score$;
  rank$ = this.quizService.rank$;

  answer(result: number) {
    this.quizService.answerCurrentQuestion(result);
    this.answerBox.nativeElement.value = '';
    this.answerBox.nativeElement.focus();
  }
}
