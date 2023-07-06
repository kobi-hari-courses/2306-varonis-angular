import { Variation } from "./variation.model";

export interface Dish {
    readonly caption: string;
    readonly price: number;
    readonly variations: Variation[]
}