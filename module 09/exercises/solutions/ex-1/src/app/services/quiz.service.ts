import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { Rank } from '../models/rank.model';
import { BehaviorSubject, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private currentQuestion: Question = this.createNewQuestion();
  private previousQuestion: Question | null = null;
  private previousAnswer: number | null = null;

  private questionsCount: number = 0;
  private correctCount: number = 0;

  private _currentQuestion$ = new BehaviorSubject<string>(this.questionToString(this.currentQuestion));
  get currentQuestion$(): Observable<string> {
    return this._currentQuestion$.asObservable();
  }

  private _previousQuestion$ = new BehaviorSubject<string>('');
  get previousQuestion$(): Observable<string> {
    return this._previousQuestion$.asObservable();
  }

  private _previousAnswer$ = new BehaviorSubject<string>('');
  get previousAnswer$() {
    return this._previousAnswer$.asObservable();
  }

  private _score$ = new BehaviorSubject<number>(0);
  get score$() {
    return this._score$.asObservable();
  }

  private _rank$ = new BehaviorSubject<Rank>('Beginner');
  get rank$() {
    return this._rank$.asObservable();
  }

  private _isPreviousQuestionCorrect$ = new BehaviorSubject<boolean>(false);
  get isPreviousQuestionCorrect$() {
    return this._isPreviousQuestionCorrect$.asObservable();
  }

  private notifyCurrentState() {
    this._currentQuestion$.next(this.questionToString(this.currentQuestion));
    this._previousQuestion$.next(this.questionToString(this.previousQuestion));
    this._previousAnswer$.next(this.previousAnswer?.toString() ?? '');
    this._score$.next(this.calcCurrentScore());
    this._rank$.next(this.calcCurrentRank());
    this._isPreviousQuestionCorrect$.next(this.isPreviousAnswerCorrect());
  }

  answerCurrentQuestion(answer: number) {
    this.previousQuestion = this.currentQuestion;
    this.previousAnswer = answer;
    this.questionsCount++;
    const points =
      answer === this.previousQuestion.op1 * this.previousQuestion.op2 ? 1 : 0;
    this.correctCount += points;
    this.currentQuestion = this.createNewQuestion();
    this.notifyCurrentState();
  }

  private createNewQuestion(): Question {
    return {
      op1: this.createRandomNumber(5, 20),
      op2: this.createRandomNumber(5, 20),
    };
  }

  private createRandomNumber(min: number, max: number): number {
    const range = max - min;
    const res = Math.floor(Math.random() * range) + min;
    return res;
  }

  private calcCurrentScore(): number {
    if (this.questionsCount === 0) return 0;
    return this.correctCount / this.questionsCount;
  }

  private calcCurrentRank(): Rank {
    const score = this.calcCurrentScore();
    if (score < 0.5) return 'Beginner';
    if (this.questionsCount < 10) return 'Beginner';
    if (score < 0.75) return 'Advanced';
    if (this.questionsCount < 15) return 'Advanced';
    return 'Professional';
  }

  private questionToString(q: Question | null): string {
    if (q === null) return '';
    return `${q.op1} * ${q.op2} = ?`;
  }

  private isPreviousAnswerCorrect() {
    if (this.previousQuestion === null || this.previousAnswer === null)
      return false;
    return (
      this.previousQuestion.op1 * this.previousQuestion.op2 ===
      this.previousAnswer
    );
  }

  constructor() {}
}
