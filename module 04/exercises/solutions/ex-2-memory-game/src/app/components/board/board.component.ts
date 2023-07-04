import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCell } from 'src/app/models/card-cell.model';
import { Card } from 'src/app/models/card.model';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    imports: [CommonModule, CardComponent]
})
export class BoardComponent {
  @Input({required: true})
  cells!: CardCell[];

  @Output()
  miss = new EventEmitter<void>();

  @Output()
  match = new EventEmitter<Card[]>();

  flipped: string[] = [];
  isFrozen = false;

  onFlip(card: Card) {
    if (this.isFrozen) return;
    if (this.flipped.includes(card.id)) return;

    this.flipped = [...this.flipped, card.id];
    this.isFrozen = this.flipped.length >= 2;
  }

  onUnfreeze() {
    // should be...
    if (this.flipped.length === 2) {
      const card1 = this.findCard(this.flipped[0])!;
      const card2 = this.findCard(this.flipped[1])!;

      if (card1.image === card2.image) {
        this.match.emit([card1, card2]);
      } else {
        this.miss.emit();
      }
    }

    this.flipped = [];
    this.isFrozen = false;
  }

  findCard(id: string): Card | null {
    const res = this.cells.find(c => (c !== null) && (c.id === id));
    return res ?? null;
  }

}
