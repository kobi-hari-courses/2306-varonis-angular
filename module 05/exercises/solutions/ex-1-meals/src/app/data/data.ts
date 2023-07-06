import { Menu } from "../models/menu.model";

export const SAMPLE_MENU: Menu = {
    dishes: [
        {
            caption: 'Omlette', 
            price: 24.50, 
            variations: [
                {
                    caption: 'with onions', 
                    price: 5
                }, 
                {
                    caption: 'with pastrami', 
                    price: 10
                }, 
                {
                    caption: 'with nature eggs', 
                    price: 3
                }
            ]
        }, 
        {
            caption: 'Tomato Pasta', 
            price: 40, 
            variations: [
                {
                    caption: 'with bolognese', 
                    price: 20
                }, 
                {
                    caption: 'gluten free', 
                    price: 15
                }, 
                {
                    caption: 'without tomatos', 
                    price: -10
                }
            ]
        }, 
        {
            caption: 'Pizza', 
            price: 15, 
            variations: [
                {
                    caption: 'with onions', 
                    price: 5
                }, 
                {
                    caption: 'with pepperoni', 
                    price: 10
                }, 
                {
                    caption: 'kalzone style', 
                    price: 6
                }
            ]
        }
    ]
}