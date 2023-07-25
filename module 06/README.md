## Module 06 - Reactive Forms

### Projects:
|     |     |
| --- | --- |
| [basic-forms](./projects/basic-forms/) | Introduction to the angular forms |

### Introduction to Reactive Forms
* We have seen how to start using angular reactive forms by incorporating `FormsModule` and `ReactiveFormsModule`
* We have constructed instances of `FormControl` to manage specific fields
* We have connected the input elements to the managing `FormControl` using the `[FormControl]` directive
* We have grouped the form controls into a single `FormGroup` and used its method and properties to collectively manage all the form controls together
* We have used the css classes `ng-valid`, `ng-invalid`, `ng-touched`, `ng-dirty` to highlight invalid fields. 
* We have used the `valid` and `invalid` properties of the form group to control the ability to submit the data
* We have used the `.value` property to get the value of a form control, or a complete object.
* We have used the `.errors` property to present error information to the user
* We have seen how to create nested objects using a nested `FormGroup`
* We have seen how to create custom validators and custom async validators

### Custom Control Value Accessors
* We creates 2 components that edit a value
    - **Number Spinner** that allows to modify a numeric value by pressing + and -
    - **Color Picker** that allows to modify a color value by setting its RGB components using sub form
* We implemented the `ControlValueAccessor` interface 
    - `writeValue` method in order to allow the form control to set the value of the component
    - `registerOnChange` method in order to allow the form control to set a callback which we use to report that the value has changed
    - `registerOnTouched` method in order to allow the form control to set a callback to be called when the control first becomes **touched**
    - `setDisableState` optional method in order to allow the form control the enable and disable the component
* We set a provider for the `NG_VALUE_ACCESSOR` injection token in order to register the component as a value accessor
* We implemented the `Validator` interface 
    - `validate` method in order to perform fixed validation on the component - validation that is always performed regardless of the definition of the FormControl
* We set the provider for the `NG_VALIDATORS` injection token in order to register the component as a self validating form control
* We saw how to take advantage of the `FormGroup` object in order to easily implement the component as a sub control. 
    - Specifically we used the reactive nature of the FormGroup in order to push changes and touch modifications to the FormControl


