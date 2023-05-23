import { Component } from '@angular/core';
import { games } from '../../games/games';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  readonly games = games;
  gameSelected: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.gameSelected = games.find(
        ({ slug }) => slug === paramMap.get('gameSelected')
      );
    });
  }
}
