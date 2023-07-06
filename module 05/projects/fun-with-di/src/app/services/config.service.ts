import { Inject, Injectable } from '@angular/core';
import { NO_IDEA_TOKEN } from '../tokens/no-idea.token';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    @Inject(NO_IDEA_TOKEN) private noIdeaNumber: number[]
  ) { }

  formatString(txt: string) {
    return `${this.noIdeaNumber} ${txt.toLowerCase()}`;
  }

  async init() {
    console.log('fetching configuration from server');
    await new Promise(res => setTimeout(res, 5000));
    console.log('configuration fetched');

  }
}
