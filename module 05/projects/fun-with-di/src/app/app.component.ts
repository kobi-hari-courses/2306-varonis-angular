import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from "./components/calc/calc.component";
import { GroupComponent } from "./components/group/group.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, CalcComponent, GroupComponent]
})
export class AppComponent {
}
