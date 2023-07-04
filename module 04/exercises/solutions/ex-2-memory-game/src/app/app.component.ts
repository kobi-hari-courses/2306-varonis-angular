import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCell } from './models/card-cell.model';
import { Player } from './models/player.model';
import { generateSuffledCards } from './helpers/card-helpers';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: CardCell[] = [];
  player1!: Player;
  player2!: Player;
  currentPlayer = this.player1;
  isCompleted = false;

  newGame() {
    this.cards = generateSuffledCards();
    this.player1 = {
      name: 'Player 1', 
      collectedPairs: []
    }
    this.player2 = {
      name: 'Player 2', 
      collectedPairs: []
    }
    this.currentPlayer = this.player1;
    this.isCompleted = false;
  }

  togglePlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  onMiss() {
    this.togglePlayer();
  }

  onMatch(cards: Card[]){
    const cardsIds = cards.map(c => c.id);
    this.cards = this.cards
      .map(c => ((c === null) || (cardsIds.includes(c.id))) ? null : c);

    for (const card of cards) {
      this.currentPlayer.collectedPairs.push(card);
    }

    this.togglePlayer();
    this.isCompleted = this.cards.every(c => c === null);
  }
}
