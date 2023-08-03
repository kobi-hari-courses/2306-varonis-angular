## Module 12 - Redux

### Projects:
|     |     |
| --- | --- |
| [redux-quiz](./redux-quiz/) | A practical example using NgRX |

### Redux and NgRx
* We learned about the core concepts of Redux
    - A **State** that holds the entire data in the application
    - A **Store** that stores the state and responsible to replace it with a new state after each action
    - An **Action** that the view dispatches in order to trigger a new state
    - A **Reducer** that calculates a new state from an existing one and an action, effectively turning out entire application into a state machine
    - A **Selector** that pulls a specific part of the state and serves it as an `Observable`
* We understood that redux belives in Uni-directional flow of data, where the store is the **Single point of truth** and data flows to it, and from it, through different routes
* We saw how to add `@ngrx/store` and `@ngrx/store-devtools` into our application
* We saw how to use the chrome extension for redux and how to configure the devtools to communicate with it
* We saw how to define the state
* We saw how to create a reducer from the initial state

### Working with immutable data
* How to define immutable entity?
  * We saw that we can create immutable entities by defining an interface where each property is `readonly`
* How to derive new object from existing one?
  * We saw that we can use several javscript tools to help us
  * Modifying object property using the spread operator (`...`) where we only specifiy the changed property
  
```javascript
newObj = {...oldObj, prop1: newValue}
```

  * Add item to array using the spread operator on arrays, so we create a new array which contains all the elements of the original array, with the new item.

```javascript
newArray = [...oldArray, newValue];
newArray2 = [newValue, ...oldArray];
```

  * Change item in array using either `slice` or `map`
  * Remove item from array using either `slice` or `filter`
* We saw how to create helper functions to make our code more readable.

### Redux and NgRx
* We saw how to define actions and how to group them under an `actionGroup`
* We saw how to define `on` parts in the reducer, that respond to specific actions and calculate the next state
* We saw how to dispatch actions from the components
* We saw how to define a hierarchy of selectors
    - We used `createFeatureSelector` to define the root selector
    - We used `createSelector` to create a selector from other more primitive selectors
* We saw how to use a selector to create observables which we can consume in the components
* We saw that when we create features using `createFeature` we automatically get the atomic selectors
* We can create additional selectors using the `extraSelectors` property

### Effects
* We talked about the fact that `actions` are acutally "events" that occur in the application
* We re-stated that the "reactive" way of thinking about applications, is that they are streams of events, translated into higher level event. In Reactive programming everything is an event.
* Since the store itself is synchronous, we wondered how would be tackle the cases of asynchronous operations.
* We introduced effects
  - `Effect` is basically a reactive pipeline, that transform a stream of actions into a stream of other actions.
  - Effects may be asynchronous, and they are allowed to have side effects. That means that you can transform a stream of actions by causing some asynchronous side effect and then then outputing a stream of other actions
* We demonstrated several scenarios to use effects
  - We saw an example of effects that write to the local storage
  - We saw an example of effects that read from the local storage and then yield actions that change the store
  - We saw an example of actions that are handled both by effects, and by a reducer
  - We saw an example of asynchronous effects
