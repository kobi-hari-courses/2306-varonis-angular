import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from 'src/app/services/meal.service';
import { Variation } from 'src/app/models/variation.model';
import { Dish } from 'src/app/models/dish.model';
import { Meal } from 'src/app/models/meal.model';

@Component({
  selector: 'app-meal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'], 
  providers: [MealService]
})
export class MealComponent {
  @Input({required: true})
  meal!: Meal;
  
  constructor(private mealService: MealService){}

  ngOnInit() {
    this.mealService.setMeal(this.meal);
    this.price = this.mealService.getPrice();
  }

  price: number = this.mealService.getPrice();

  addItem(dish: Dish, variation: Variation) {
    this.mealService.addItem(dish, variation);
    this.price = this.mealService.getPrice();
  }


  @Output()
  delete = new EventEmitter<void>();

}
