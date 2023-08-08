import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[item-template]', 
    standalone: true
})
export class ItemTemplateDirective {
    constructor(public template: TemplateRef<any>){}

}