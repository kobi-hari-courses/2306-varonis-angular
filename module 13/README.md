# Module 13 - Advanced  DI
### Projects:
|     |     |
| --- | --- |
| [ng-new](./ng-new/) | Angular 14 - 16 new features |

### The `inject` function
* Angular 14 comes with a new |dirty trick" - the `inject` function
* This function allows to inject dependencies into a function (not just constructors)

```typescript
import { inject } from '@angular/code';

function myFunc() {
    const service = inject(MyService);
}
```

* There is only one cavet... this function can only run in "injection context".
* `Injection context` is a fancy term. It means, that while the `inject` function is executed, there has to be an injector present in a very specific global variable that the function will access.
* What is means - effectively - is that we can only use the inject function in:
    - The constructor of an angular object (Component, Directive, Pipe, Service)
    - One of the functions that angular calls: Guard, Resolver, Effect, Interceptor
    - A function that we specifically call in the correct context
* We can use the `runInInjectionContext` function to execute a function in the context of an injector.
* We have seen how to create our own injectors, and how to inject the component injector into the component.

### DestroyRef
* Angular 16 allows us to inject the `DestroyRef` instance into our component.
* We can use it to apply logic during destruction, without implementing the OnDestroy interface. 
* We saw that there are some new functions that take advantage of that, for example the `takeUntilDestroyed` rxjs operator.
* Again - the only cavet is that these functions must be called in injection context.
* Currently, when you call a function, there is no way to tell if it (or one of the inner function it calls) are supposed to run in context. So this feature is quire problematic...


