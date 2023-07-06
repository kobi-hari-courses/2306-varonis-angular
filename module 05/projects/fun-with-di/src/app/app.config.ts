import { ApplicationConfig } from '@angular/core';
import { AdditionService } from './services/addition.service';

export const appConfig: ApplicationConfig = {
  providers: [
    AdditionService
  ]
};
