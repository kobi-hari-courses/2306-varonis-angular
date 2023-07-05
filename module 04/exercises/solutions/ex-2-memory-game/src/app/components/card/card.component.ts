import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/models/card.model';
import { CardCell } from 'src/app/models/card-cell.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input({required: true})
  card!: CardCell;

  @Input()
  flipped = false;

  @Output()
  flip = new EventEmitter<void>();

  imagePath = '';

  invalidate() {
    this.imagePath = this.calcPath();
  }

  calcPath(): string {
    if (this.card === null) return '';
    if (!this.flipped) return 'assets/images/bg.jpg';
    return `assets/images/cards/${this.card.image}.jpg`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }

}
