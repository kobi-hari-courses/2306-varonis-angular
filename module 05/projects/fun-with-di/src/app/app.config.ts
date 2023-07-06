import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { PREFIX_TOKEN } from './tokens/prefix.token';
import { WrongAdditionService } from './services/wrong-addition.service';
import { AdditionService } from './services/addition.service';
import { TIMESTAMP_TOKEN } from './tokens/timestamp.token';
import { ConfigService } from './services/config.service';
import { NO_IDEA_TOKEN } from './tokens/no-idea.token';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: PREFIX_TOKEN,
      useValue: 'DEBUG',
    },
    {
      provide: AdditionService,
      useExisting: WrongAdditionService,
    },
    {
      provide: TIMESTAMP_TOKEN,
      useFactory: (service: ConfigService) => () =>
        service.formatString(new Date().toTimeString()),
      deps: [ConfigService],
    },
    {
      provide: NO_IDEA_TOKEN,
      useValue: 42,
      multi: true,
    },
    {
      provide: NO_IDEA_TOKEN,
      useValue: 50,
      multi: true,
    },
    {
      provide: APP_INITIALIZER, 
      useValue: async () => {
        console.log('init started');
        await new Promise(res => setTimeout(res, 3000));
        console.log('init completed')
      }, 
      multi: true
    },
    {
      provide: APP_INITIALIZER, 
      useFactory: (service: ConfigService)=> () => service.init(),
      deps: [ConfigService], 
      multi: true
    }
  ],
};
