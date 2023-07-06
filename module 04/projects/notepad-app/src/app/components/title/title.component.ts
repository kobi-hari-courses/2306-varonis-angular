import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html', 
    styleUrls: ['./title.component.css'], 
    standalone: true
})
export class TitleComponent implements OnInit, OnChanges {
    @Input()
    caption: string = 'This is my title';

    @Input()
    reka: string = 'lightgreen';

    foreground = 'black';

    constructor() {
    }
    ngOnInit() {
    }

    invalidateForeground() {
        if ((this.reka === 'red') || (this.reka === 'black'))
            this.foreground = 'white'
            else 
            this.foreground = 'black';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['reka']) {
            this.invalidateForeground();
        }
    }

}