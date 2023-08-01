## Module 11 - Promises
### Projects:
|     |     |
| --- | --- |
| [fun-with-promises](./projects/fun-with-promises/) | Introduction to promises in Javascript |

### Introduction to Promises and Async Development
* We defined a promise as an object that tells us if an action that takes time has completed, and what is the result
* We saw that we can not "pull" that information, but rather have to use the `.then` and `.catch` methods and provide callbacks that will be called when the promise completes
* We saw how to create a promise using the `Promise Constructor`.
* We understood what `async` and `await` keywords do and how do they affect the compilation
* We understood that the `.then` method, and the `async` keywords, also create promises, out of other promises
* We understood what operators are and that we have 3 categories of operators:
  * Factories - create promises out of nothing
  * Pipeables - create promise out of one promise, and therefore chainable
  * Combinators - create promise out of collection of promises
* We saw how to use `Promise.resolve` and `Promise.reject` as factories to create promises that are already completed.
* We saw how to use `Promise.all` and `Promise.race` to group promises together and wrap them in a single promise that returns all the results from all the promises or from the first one to complete.
* Finally we understood how the `Promise` constructor works
  * We saw that we provide it with a callback that is executed instantly
  * We saw that the Promise constroctor passes to our callbacks 2 functions that can be used to complete the promises, either succesfully with a result or unsuccesfully with an error
  * We saw an example of storing the `resolve` callback and then calling it later when the user clicks a button



