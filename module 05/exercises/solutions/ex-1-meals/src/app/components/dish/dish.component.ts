import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dish } from 'src/app/models/dish.model';
import { Variation } from 'src/app/models/variation.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {
  constructor(protected stateService: StateService) {}
  @Input({required: true})
  dish!: Dish;

}
