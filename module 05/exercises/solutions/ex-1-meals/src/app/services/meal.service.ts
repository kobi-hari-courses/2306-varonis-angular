import { Injectable } from '@angular/core';
import { Meal } from '../models/meal.model';
import { MealItem } from '../models/meal-item.model';
import { Dish } from '../models/dish.model';
import { Variation } from '../models/variation.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private meal: Meal = {
    items: []
  }

  private price: number = 0;

  getItems(): MealItem[] {
    return this.meal.items;
  }

  getPrice(): number {
    return this.price;
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


  constructor() { }
}
