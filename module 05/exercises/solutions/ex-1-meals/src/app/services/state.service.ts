import { EventEmitter, Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';
import { Variation } from '../models/variation.model';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public meals: Meal[] = [];

  public selectedMeal: Meal | null = null;

  onAdd = new EventEmitter<[Dish, Variation]>();

  add(dish: Dish, variation: Variation) {
    this.onAdd.emit([dish, variation]);    
  }

  addMeal() {
    this.meals.push({
      items: []
    });
  }

  removeMeal(value: number) {
    this.meals.splice(value, 1);
  }

  setSelected(meal: Meal) {
    this.selectedMeal = meal;
  }

  constructor() { }
}
