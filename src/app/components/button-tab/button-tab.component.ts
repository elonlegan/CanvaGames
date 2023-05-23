import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-tab',
  templateUrl: './button-tab.component.html',
  styleUrls: ['./button-tab.component.scss'],
})
export class ButtonTabComponent {
  @Input() game: any;
}
