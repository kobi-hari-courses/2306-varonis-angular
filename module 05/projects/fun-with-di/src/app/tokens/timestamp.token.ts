import { InjectionToken } from "@angular/core";

export const TIMESTAMP_TOKEN = new InjectionToken<() => string>('TIMESTAMP');