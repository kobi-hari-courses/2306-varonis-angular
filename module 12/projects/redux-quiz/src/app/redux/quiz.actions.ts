import { createAction, props } from "@ngrx/store";

export const reset = createAction('[User Quiz] reset');

export const answerCurrentQuestion = createAction('[User Quiz] answer current question', 
    props<{answerIndex: number}>());

