import { inject } from "@angular/core";
import { Actions, ROOT_EFFECTS_INIT, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { quizFeature } from "../features/quiz/redux/quiz.feature";
import { map, skip, take, tap } from "rxjs/operators";
import { systemActions } from "./quiz.actions";
import { QuizState } from "../features/quiz/redux/quiz.state";

export const saveToStorage = createEffect(() => inject(Store)
    .select(quizFeature.selectQuizState)
    .pipe(
        skip(1), 
        tap(state => localStorage.setItem(quizFeature.name, JSON.stringify(state)))
    ), {
        functional: true, dispatch: false
    }    
)

export const loadFromStorage = createEffect(() => inject(Actions).pipe(
    ofType(ROOT_EFFECTS_INIT), 
    take(1), 
    map((_) => systemActions.resetState({
        state: JSON.parse(
            localStorage.getItem(quizFeature.name)!) as QuizState }))
), {
    functional: true
});