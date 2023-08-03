import { createReducer } from "@ngrx/store";
import { QUIZ_INITIAL_STATE } from "./quiz.state";

export const quizReducer = createReducer(QUIZ_INITIAL_STATE);
