import { createFeature, createSelector } from "@ngrx/store";
import { quizReducer } from "./quiz.reducer";

export const quizFeature = createFeature({
    name: 'quiz', 
    reducer: quizReducer, 
    extraSelectors: ({selectAnswers, selectQuestions}) => {
        const selectCurrentQuestionIndex = createSelector(selectAnswers, all => all.length);
        const selectCurrentQuestion = createSelector(selectQuestions, selectCurrentQuestionIndex, (all, index) => all[index]);

        return {
            selectCurrentQuestionIndex, 
            selectCurrentQuestion
        }
    }
});

