import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input({required: true})
  card!: Card;

  @Input()
  flipped = false;

  @Output()
  flip = new EventEmitter<void>();

  imagePath = '';

  invalidate() {
    if (!this.flipped) {
      this.imagePath = 'assets/images/bg.jpg';
    } else {
      this.imagePath = `assets/images/cards/${this.card.image}.jpg`;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }

}
