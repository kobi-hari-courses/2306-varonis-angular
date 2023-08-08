import { Directive, HostListener, Optional, inject } from "@angular/core";
import { ExpanderComponent } from "./expander.component";

@Directive({
    selector: '[expander-toggle]'
})
export class ExpanderToggleDirective {
    @HostListener('click')
    onClick() {
        console.log('The expander toggle button was clicked');
        this.expander?.toggle();
    }

    constructor(@Optional() private expander: ExpanderComponent | null){}
}