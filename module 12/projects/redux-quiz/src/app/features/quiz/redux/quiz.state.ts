import { ALL_QUESTIONS } from "src/app/models/all-questions";
import { Answer } from "src/app/models/answer.model";
import { Question } from "src/app/models/question.model";

export interface QuizState {
    readonly questions: Question[], 
    readonly answers: Answer[]
}

export const QUIZ_INITIAL_STATE: QuizState = {
    questions: ALL_QUESTIONS, 
    answers: []
}