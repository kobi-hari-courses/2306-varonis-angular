# Angular Dependency Injection exercises

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

