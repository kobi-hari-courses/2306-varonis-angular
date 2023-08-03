import { createFeature, createSelector } from "@ngrx/store";
import { quizReducer } from "./quiz.reducer";
import { buildQuizEntries } from "./quiz.helpers";

export const quizFeature = createFeature({
    name: 'quiz', 
    reducer: quizReducer, 
    extraSelectors: ({selectQuizState, selectAnswers, selectQuestions}) => {
        const selectCurrentQuestionIndex = createSelector(selectAnswers, all => all.length);
        const selectCurrentQuestion = createSelector(selectQuestions, selectCurrentQuestionIndex, (all, index) => all[index]);

        return {
            selectCurrentQuestionIndex, 
            selectCurrentQuestion, 
            selectQuizEntries: createSelector(selectQuizState, state => buildQuizEntries(state))
        }
    }
});

