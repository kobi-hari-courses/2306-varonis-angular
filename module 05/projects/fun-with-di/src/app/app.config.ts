import { ApplicationConfig } from '@angular/core';
import { PREFIX_TOKEN } from './tokens/prefix.token';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: PREFIX_TOKEN,
      useValue: 'DEBUG'
    }
  ]
};
