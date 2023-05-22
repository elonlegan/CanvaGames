import { Component, Input } from '@angular/core';
import { games } from '../../games/games';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent {
  readonly games = games;
}
