## Module 17 -  Templates, Views and Structural Directives

### Projects:
|     |     |
| --- | --- |
| [fun-with-templates](./projects/fun-with-templates/) | Templates, Containers and Structural directives |
| [notepad-app](./projects/notepad-app/) | A practical example of customizable compound component |

### Containers and Templates
* We saw how to use `<ng-container>` in order to create a container element that will not appear in the final DOM
* We saw that we can still place directives on the container
* We saw how to define a reusable piece of `html` using `<ng-template>`
* We saw how to define local varibles that can be bound to inside the template using the let-* attributes
* We saw how to use the template inside an `<ng-container>` using the `*ngTemplateOutlet` directive
* We saw how to supply the data to be bound to using the `context` and `$implicit` keywords,
* Finally, we saw how comnponents may receive templates as input, and use them in their own templates. This allows us to create much more customizable components.

### DOM Manipulation in Angular
* We reminded that direct DOM manipulation in angular is discouraged. Instead we should use the following tools to perform low level manipulations:
    - `Renderer` - In order to perform element manipulations such as setting attributes, properties, styles and classes
    - `ViewContainerRef` - In order to perform structural modifications to the DOM
* We understood that angular works with 2 versions of the visual tree
    - The "View Hierarchy" where angular maintains a tree of views (We will define what a view is, in a minute)
    - The actual DOM (which we should not assume anything about becuase it depends on specific platform)
* We understood the definition of a view: 
    - A minimal set of elements created and destroyed together. 
* We saw that there are 2 types of views:
    - **Embedded View** - Created from a template
    - **Host View** - Created from a component
* Angular uses a set of objects in the "view world":
    - `ElementRef` a wrapper around a single HTML Element (DOM node in the browser world).
    - `TemplateRef` a wrapper around an angular template
    - `ViewRef` a base class that represents a complete view: an atomic set of elements that are created and destroyed together.
    - `EmbeddedViewRef` a subclass of `ViewRef` that represents a view that was created out of a template
    - `ComponentRef` represents an instance of component and contains a `ViewRef` for the hosted view
* We learned about the `ViewContainerRef`
    - There is one per element
    - Knows how to inject views after that element
    - Maintains a collection of `ViewRef` objects and allows to add, remove, move them.
* We saw how to create the embedded views programatically
    - `TemplateRef.createEmbeddedView` creates an embedded view from a template, receives an object that will be used as data context inside the template
* We also saw that the `ViewContainerRef` provides shortcuts that both create a view and insert it into the collection.
* We saw how to use `*ngTemplateOutlet` directive in order to create an `EmbeddedView` declaratively.

### Templates and Structural Directives
* We understood a little more about the context that is used in templates
    - The context may include any properties
    - Templates may define local variables that will store a single context property value
    - The templates may define local variable without explicitly directing it to a property, in which case it will hold the value of a property called `$inplicit`
* We understood that the `*` syntax is just a syntactic sugar for using templates
    - Angular places the element and its content inside `<ng-template>` wrapper and places the directive on the template.
    - Angular uses the **Microsyntax** rules in order to define template variables, and inject values into directive inputs
* We have created our own implementation of `ngIf`
* Finally we used structural diretives and the microsyntax to allow for easier creation of templates as parameters for compound components.
    - Specifically, we injected a template from the component content, using `@ContentChild`

### `ViewChild` and `ViewChildren`
* We understood the meaning of "View" in angular
* We saw the `AfterViewInit` lifecycle hook
* We saw how to grab various view items using the `ViewChild` decorator:
    * ElementRef
    * ViewContainerRef
    * TemplateRef
    * Components and Directives
* We saw how to use reference strings to access elements as view children
