import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/models/menu.model';
import { DishComponent } from "../dish/dish.component";
import { Variation } from 'src/app/models/variation.model';
import { Dish } from 'src/app/models/dish.model';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    imports: [CommonModule, DishComponent]
})
export class MenuComponent {
  constructor(private menuService: MenuService){}

  menu: Menu = this.menuService.getMenu();
}
