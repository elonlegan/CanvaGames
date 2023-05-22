import { Component } from '@angular/core';
import { games } from '../../games/games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  readonly games = games;
}
