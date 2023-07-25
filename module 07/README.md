## Module 07 - Routing

### Projects:
|     |     |
| --- | --- |
| [app-routing](./projects/app-routing/) | Introduction to the angular router |

### Introduction to routing
* How to use the router by importing the router module
* How to configure the router using `RouterModule.forRoot`
* We created a navigation bar using the `RouterLink` directive instead of `href`
* We saw how to divide our app into modules, specifically how to create a routing module to encapsulate navigation logic

### Advanced routing
* We saw how to pass parameters to a routed component using the `ActivatedRoute` service and the `params` property.
* We saw how to use `queryParams` with the angular router.
* We saw how to use RxJS to create a component that responds to parameters change
* We saw how to create a guard that communicates with the authentication service to prevent entering a page without login in first
* We saw how to make the guard and authentication service, play together to allow redirecting to the desired page after login
* We saw how to create hierarchical routing, and use nested `<router-outlet>` directives.
* We saw how to separate our pages into **Feature Modules**. 
  * How to define a child router.
  * How to lazy load the module.
  * How to wrap all pages in the fature module with a container component



