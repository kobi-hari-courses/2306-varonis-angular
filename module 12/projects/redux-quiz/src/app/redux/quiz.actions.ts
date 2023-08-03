import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const userQuizActions  = createActionGroup({
    source: 'User Quiz', 
    events: {
        'reset': emptyProps(), 
        'answer current question': props<{index: number}>()
    }
})
