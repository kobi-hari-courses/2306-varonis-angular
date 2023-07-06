import { MealItem } from "./meal-item.model";

export interface Meal {
    readonly items: MealItem[];
}