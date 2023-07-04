# Angular Component Authoring Exercise

## Exercise 1: Blog Post Management App
In this exercise, you will create a simple blog post management application. I will allow the user to view all the blog posts, and create new ones, or delete existing ones.

### Step 1: Define the `Post` Interface

Create a `Post` interface with the following readonly properties: `id`, `title`, `content`, and `date`. 

### Step 2: Create the `PostComponent`

Create a `PostComponent` that will display an individual post. The component should have a `post` input property, and it should display the `title`, `content`, and `date` of the post. In addition, the component should calculate and display the word count of the `content`.

The `PostComponent` should use the required lifecycle hooks to calculate the word count when the component is initialized and when the `post` input property changes, respectively.

### Step 3: Create the `PostListComponent`

Create a `PostListComponent` that will display a list of posts. The component should have a `posts` input property and a `deletePost` output event. The `PostListComponent` should use the `PostComponent` to display each post in the `posts` list. It should also have a button for each post that, when clicked, emits the `deletePost` event.

### Step 4: Create the `CreatePostComponent`

Create a `CreatePostComponent` that allows the user to create a new post. The component should have a `newPost` output event. It should include input fields for the `title` and `content` of the post, and it should have a button that, when clicked, creates a new `Post` object with the entered `title` and `content` and the current date, and emits this new post on the `newPost` event.

### Step 5: Implement the Parent Component

Implement a parent component that uses the `PostListComponent` and the `CreatePostComponent`. The parent component should contain an array of `Post` objects. It should pass this array as an input to the `PostListComponent`, and it should handle the `deletePost` event from the `PostListComponent` and the `newPost` event from the `CreatePostComponent` to update the array of `Post` objects.

## Exercise 2: Memory Game App

The goal of this exercise is to create a simple memory game. The game will have two players who take turns to find matching pairs of cards. Each player will accumulate the pairs they've found. 

## Requirements

1. Define two interfaces:
    - `Player`: should have properties for `name`, and an array of `collectedPairs`. You can initialize the names to `Player 1` and `Player 2`
    - `Card`: should have properties for `id` and `image`

2. Create four Angular components:
    - `CardComponent`: displays a card. (Presentational)
        - This component should take a `Card` as input and
        - Should take a `flipped: boolean` input
        - It should emit an event when the button is clicked
        - Should present an image according to the card image and flipped inputs. If it is flipped it should present the image of the card. If not, it should present a card background image
    - `PlayerComponent`: displays a player's info (Presentational) 
        - This component should take a `Player` as input.
        - Should display name, the number of pairs they've collected, and the cards of the collected pairs. 
    - `BoardComponent`: displays the board (Presentational) 
        - This component should take the list of `Card | null`s as input.  (the nulls are for )
        - It should also take a list of flipped cards as inputs 
        - 
        It should track which cards are flipped, and emit this state when a card is flipped.
    - `GameComponent` (Parent Component): displays two `PlayerComponent`s and one `GameBoardComponent`. It also includes a "New Game" button to reset the game.

3. Game Logic:
    - The game starts with the first player.
    - When a player flips a pair of matching cards, those cards are added to the player's `collectedPairs`.
    - Players take turns flipping cards. A turn consists of flipping two cards.
    - The game continues until all pairs are found.
    - The "New Game" button should reset the game state.

## Hints

- To generate the list of cards, consider creating a list of images, duplicating that list, and then shuffling the result. Each card should be assigned a unique `id`.
- You might need to use the `*ngFor` directive to iterate over arrays in your templates.
- Consider using the `*ngIf` directive to conditionally display content in your templates.
- You will likely need to use the `@Input()` and `@Output()` decorators to pass data between parent and child components.