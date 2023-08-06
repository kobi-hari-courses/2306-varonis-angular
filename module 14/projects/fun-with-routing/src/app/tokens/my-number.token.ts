import { InjectionToken } from "@angular/core";

export const MY_NUMBER = new InjectionToken<number>('MY NUMBER', {
    providedIn: 'root', 
    factory: () => 54
});