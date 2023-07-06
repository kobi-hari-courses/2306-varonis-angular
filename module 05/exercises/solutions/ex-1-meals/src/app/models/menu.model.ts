import { Dish } from "./dish.model";

export interface Menu {
    readonly dishes: Dish[];
}