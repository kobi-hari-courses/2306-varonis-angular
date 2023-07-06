# Angular Dependency Injection exercises

This topic has 2 exercises
- Exercise 1 practices the basic skills of dependency injection along with components and services
- Exercise 2 practices some special features such as
    - Dependency Token
    - Various types of providers


## Exercise 1 - Meal Builder Application

In this exercise, you will create an Angular application that allows users to build multiple meals simultaneously. Each meal is constructed from a list of dishes, where each dish has a base price and multiple variations, each variation adding a different price to the base.

### Main data model
In our application there will be a menu of dishes, such as Tomatos pasta and Egg Omlette. Each dish will have a basic price. In addition, each dish will come with a list of "variations". For example, the tomato pasta can come either with "olives and onions" or "bolognese meat", and the egg omlette can come either with "parsley" or with "pastrami". Each variation has an additional cost that is added to the price of the basic dish.

The purpose of the application is to allow the user to create "meal boxes". Each meal will contain severtal dishes, but in each meal you select only a specific variation of the dish. For example you can create a vegan meal that includes the pasta with vegtables and the omlette with prsley, while a carni meal with include pasta bolognese and omlette with pastrami.

While building the meal boxes, you will see the accumulated price of each meal.

### Detailed Requirements

1. **Menu Display Area**: At the top of your application, there should be an area presenting a list of dishes along with their variations.

2. **Meal Boxes**: Below the display area, create an area where meals are represented by individual boxes. These boxes should be stacked horizontally next to each other. Each box represents a meal the user is building. There should be functionality to add a new meal box or remove an existing one.

3. **Meal Selection**: The user should be able to select one meal box at a time. The selected box should be visually distinct from the others to indicate it's the currently active meal being edited.

4. **Dish Selection**: Once a meal box is selected, the user can then choose a dish from the menu area at the top.

5. **Variation Selection**: Once a dish is selected, the variations for that dish are displayed to the user. Next to each variation, there should be an "Add" button.

6. **Adding Variations**: When the user clicks the "Add" button next to a variation, that variation (with its additional price) is added to the currently selected meal. The display for the selected meal box should update to reflect the added variation, showing a list of all selected dishes with their variations and the latest total cost of the meal.

7. **Price Calculation**: Each dish has a base price and each variation adds an additional cost to that base price. The total cost of a meal is the sum of the base price of all dishes and their additional variation costs.

Ensure that each component maintains its own state and operates independently of the others. The application should support creating and editing multiple meals at the same time.

### Guidelines
* Create a "Menu Service" to handle the menu. 
* Create a "Meal Service" to handle each meal. 
* Divide the application into many components, try not to write too much logic into each one.


## Exercise 2 - Discounts
In this exercise we build on the previous example, and now we add a sophisticated "discount service" that affects the price calculation for each service

### Introduction
In our meal building app, the price is calculated in a way that allows us to offer discount in happy hours. We want to encapsulate the logic of discount in 2 different services. One calculates the discount for happy hour and the other for "normal" hours

### Steps
1. Create an Interface `DiscountService` that includes a method called `getDiscount`. The method will receive a meal and will return the discount offered for that meal
2. Implement 2 services the implement this interface. One is `HappyHourDiscountService` and one is `StandardDiscountService`. 
    - The standard discount service will give 10% discount for every dollar over 100$ price
    - The happy hour discount service will give 50% discount on the base prices for each dish (but not on the variation price)
3. The "Meal Service" should request a discount service and include a discount for every meal.
    - How will the Meal service ask for the discount service? Can it use the interface as token?
4. The Meal component should display the discount and the final price. It should also display the type of discount planned for this meal
5. Now create a special provider that will decide which type to inject
     - If the time when the meal is created is between XX:50 and XX:00 (for every round hour) - use the happy hour discount. Otherwise use the stadndard one.
     - Note that the discount is determined when the meal component is created
     - Also note that there will be, at the same time, some meals with happy hour discount

### Hints
* You cannot use interfaces as tokens (why). What can you use instead?
* You can get the current date as follows: 
``` javascript 
const d = new Date();
```
* Get the number of minutes in the current date and time as follows: 
``` javascript
const mins = d.getMinutes();
```
* How do you provide different service types for different conditions?
