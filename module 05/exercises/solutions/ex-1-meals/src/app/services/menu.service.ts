import { Injectable } from '@angular/core';
import { SAMPLE_MENU } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenu() {
    return SAMPLE_MENU;
  }  

  constructor() { }
}
