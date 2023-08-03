import { ApplicationConfig } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { quizFeature } from './features/quiz/redux/quiz.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(), 
    provideState(quizFeature),
    provideStoreDevtools(),

  ]
};
