import { Component, Input } from '@angular/core';
import { games } from '../../games/games';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent {
  readonly games = games;
  gameSelected: any = games[0];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap) => {
      this.gameSelected =
        games.find(({ slug }) => slug === paramMap.get('gameSelected')) ||
        games[0];
    });
  }
}
