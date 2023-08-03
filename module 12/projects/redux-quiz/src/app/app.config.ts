import { ApplicationConfig } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { quizFeature } from './features/quiz/redux/quiz.feature';
import * as appEffects from './redux/app.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(), 
    provideState(quizFeature),
    provideEffects(appEffects),
    provideStoreDevtools({
      maxAge: 25
    }),

  ]
};
