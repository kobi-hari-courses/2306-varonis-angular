import { createReducer, on } from '@ngrx/store';
import { QUIZ_INITIAL_STATE } from './quiz.state';
import { userQuizActions } from 'src/app/redux/quiz.actions';
import { currentQuestion } from './quiz.helpers';

export const quizReducer = createReducer(
  QUIZ_INITIAL_STATE,
  on(userQuizActions.reset, () => QUIZ_INITIAL_STATE),
  on(userQuizActions.answerCurrentQuestion, (state, action) => ({
    ...state,
    answers: [
      ...state.answers,
      {
        userAnswer: action.index,
        isCorrect: currentQuestion(state).correctAnswer === action.index,
      },
    ],
  }))
);
