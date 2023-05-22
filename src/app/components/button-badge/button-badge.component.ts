import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-badge',
  templateUrl: './button-badge.component.html',
  styleUrls: ['./button-badge.component.scss'],
})
export class ButtonBadgeComponent {
  @Input() game: any;
}
