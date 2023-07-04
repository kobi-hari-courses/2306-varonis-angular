import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input({required: true})
  player!: Player;

}
