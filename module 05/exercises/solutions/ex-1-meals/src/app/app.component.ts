import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "./components/menu/menu.component";
import { MealComponent } from "./components/meal/meal.component";
import { StateService } from './services/state.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, MenuComponent, MealComponent]
})
export class AppComponent {
  constructor(public stateService: StateService){}

}
