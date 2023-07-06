Day 05 - Dependency Injection
### Projects
|     |     |
| --- | --- |
| [fun-with-di](./fun-with-di/) | Deep dive into Dependency Injection in angular |

### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of a Module, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services
* We created an Injector on our own and saw how to 
    * Create it using the `Injector.create` factory
    * Define the injector providers
    * Define the parent injector
    * Use it to get instances of objects per token.
* We saw how to define an Injection Token
    * We used the `useValue` and `useFactory` providers to set the value of the token
    * We consumed the token using the `@Inject` decorator
* We saw how to inject `APP_INITIALIZER` to initialize a service


