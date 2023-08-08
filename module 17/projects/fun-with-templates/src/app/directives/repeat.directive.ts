import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export interface RepeatDirectiveContext {
    readonly index: number; 
    readonly even: boolean;
}

@Directive({
    standalone: true,
    selector: '[myRepeat]'
})
export class RepeatDirective {
    _count = 0;
    @Input()
    set myRepeat(value: number) {
        this._count = value;
        this.invalidate();
    }

    _startWith = 1;
    @Input()
    set myRepeatStartWith(value: number) {
        this._startWith = value;
        this.invalidate();
    }

    invalidate() {
        while (this.vcr.length > this._count) {
            this.vcr.remove(this.vcr.length - 1);
        }
        while (this.vcr.length < this._count) {
            this.vcr.createEmbeddedView(this.template, { index: this.vcr.length, even: this.vcr.length % 2 === 0});
        }

        for (let i = 0; i < this.vcr.length; i++) {
            (this.vcr.get(i) as EmbeddedViewRef<RepeatDirectiveContext>).context = {
                index: i + this._startWith, 
                even: (i + this._startWith) % 2 === 0
            }
        }
    }

    constructor(
        private template: TemplateRef<RepeatDirectiveContext>, 
        private vcr: ViewContainerRef){}
    
}