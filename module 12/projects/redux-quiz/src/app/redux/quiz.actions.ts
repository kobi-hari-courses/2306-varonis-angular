import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { QuizState } from "../features/quiz/redux/quiz.state";

export const userQuizActions  = createActionGroup({
    source: 'User Quiz', 
    events: {
        'reset': emptyProps(), 
        'answer current question': props<{index: number}>()
    }
})

export const systemActions = createActionGroup({
    source: 'System', 
    events: {
        'reset state': props<{state: QuizState}>()
    }
})
