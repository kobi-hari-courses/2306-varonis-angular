import { Dish } from "./dish.model";
import { Variation } from "./variation.model";

export interface MealItem {
    readonly dish: Dish;
    readonly variation: Variation;
}