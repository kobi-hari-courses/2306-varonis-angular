import { Injectable } from '@angular/core';
import { Meal } from '../models/meal.model';
import { MealItem } from '../models/meal-item.model';
import { Dish } from '../models/dish.model';
import { Variation } from '../models/variation.model';
import { StateService } from './state.service';

@Injectable()
export class MealService {
  constructor(private stateService: StateService){
    stateService.onAdd.subscribe(val => {
      if (this.stateService.selectedMeal === this.meal) {
        this.meal.items.push({
          dish: val[0], 
          variation: val[1]
        });
        this.price = this.calculatePrice();
      }
    })
  }

  private meal!: Meal;

  public price: number = 0;

  setMeal(meal: Meal) {
    this.meal = meal;
  }

  getItems(): MealItem[] {
    return this.meal.items;
  }

  addItem(dish: Dish, variation: Variation) {
    this.meal.items.push({
      dish, 
      variation
    });
    this.price = this.calculatePrice();
  }

  calculatePrice() {
    return this.meal.items.reduce((acc, item) => acc + item.dish.price + item.variation.price 
    , 0)
  }

}
