// import { createAction, props } from "@ngrx/store";

import { createActionGroup, emptyProps, props } from "@ngrx/store";

// export const reset = createAction('[User Quiz] reset');

// export const answerCurrentQuestion = createAction('[User Quiz] answer current question', 
//     props<{answerIndex: number}>());


export const userQuizActions  = createActionGroup({
    source: 'User Quiz', 
    events: {
        'reset': emptyProps(), 
        'answer current question': props<{index: number}>()
    }
})
