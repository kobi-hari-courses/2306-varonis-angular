# Module 14 - Routing in angular 16
### Projects:
|     |     |
| --- | --- |
| [fun-with-routing](./projects/fun-with-routing/) | Angular 14 - 16 new features |

### importing providers - The standalone way
* In the standalone application schema, we are minimizing the use of modules only for situations where we need to group together components and directives
* We are no longer supposed to use modules for
    - Components that are by nature standalone (for example the root component, and complete pages)
    - providers and setup of the root injector
* In cases when we need to import a set of providers, we do it by calling a function that returns the providers, instead of importing a module.
* Examples: 
    - The router is configured using `provideRouter()`
    - The http is configured using `provideHttpClient()`
    - If we still need to import providers from a module, we can use the `importProvidersFrom(module)` function
    - We should only import modules for the components, directives and pipes in them.

### Setting up the router
* The router is a special module becuase it contains both template items (directives) and providers.
* It is now split into 2 parts:
    - If you want to set up the router, instead of using `RouterModule.forRoot(routes)` or `RouterModule.forChild(routes)` you simply call the function `provideRouter(routes)`
    - If you want to use the directives, you need to import the module itself: `imports: [RouterModule]`
    - Of course, since all the directives are also standalone, you can simply `imports: [RouterOutlet, RouterLinkDirective]`
* When you use a standalone component as a page to route to (which is recommended), you can load it lazily using the `loadComponent` function:

```typescript
const routes: Routes = [
    { path: 'my-page', loadComponent: () => 
        import('./components/my-page/my-page.component')
        .then(m => m.MyPageComponent)}
]
```

* If you want to lazy-load a collection of child routes (which was the only option in the older version of angular) you can still use `loadChildren` but instead of passing a module file as parameter, you simply pass a file that contains an array of routes

```typescript
// child-routes.ts
const routes: Routes = [
    {path: 'page-a', component: PageAComponent}, 
    {path: 'page-b', component: PageBComponent}
]

// main-routes.ts
const routes: Routes = [
    {
        path: 'parent-page', 
        loadChildren: () => 
            import ('./child-routes')
            .then(m => m.routes)
    }
]
```

### Environment Injectors
* You can now define providers that are specific to a set of routes (or to one specific route).
* These providers are used to configure an injector that is lazily created when you navigate to a route for the first time.
* These injectors are called "Environment Injectors" and they are created by the router
* The envioronment injectors form their own hierarchy, so now there are 2 hierarchies of injectors: 
    - Node Injectors - tied to components and views in the visual tree
    - Enviorment Injectors - tied to hierarchies of routes. 

```typescript
const routes: Routes = [
    { path: 'page-a', component: PageAComponent, 
    providers: [
        {
            provide: MY_TOKEN, 
            useValue: 42
        }, 
    children: [
        { path: 'part-1', component: Part1Component, 
        providers: [
            {
                provide: MY_TOKEN, 
                useValue: 50
            }
        ]}
    ]
    ]}
]
```

* If you want to respond to the creation of an environment injector, you can provide the `ENVIRONMENT_INITIALIZER` token

### Router inputs

* There are several cases where you need to pass data from the router to the components:
    - `params` - which are parts of the url itself
    - `queryParams` - which are passed in the url but are provided as arguments
    - `resolved data` - calculated using a resolver
    - `constant data` - passed in the `data` property of the route
* Before anguler 16, the way to get these value was through the `ActivatedRoute` service, which you inject into the component.
* Now the router can send you these pieces of data through the use of the `@Input` decorator.
* To enjoy this feature, you first need to enable it when providing the router:

```typescript
// app.config.ts
const providers = [
    provideRouter(routes, withComponentInputBinding())
]
```
* Now id you define these pieces of data in the route, they will be injected through the inputs:

```typescript
// routes.ts
const routes: Routes = [
    { 
        path: 'page-a/:id', 
        data: {x: 12, y: 'Hello'}, 
        resolve: {z: () => inject(UserService).getUser()}
    }
]

// page-a.component.ts
export class PageAComponent {
    @Input() x!: number;
    @Input() y!: string;
    @Input() id!: string;
    @Input() z!: User
}
```

### Functional guards and resolvers
* The interfaces that defined the guards and resolvers are now deprecated
* You can still use them, for now, but they will be removed soon
* Instead, you are now expected to write them as functions instead of classes
* If you need to use dependency injection, use the `inject` function.

```typescript
export const authGuard = () => inject(AuthService).isLoggedIn();
```

* You can still use the generator to generate them for you.
