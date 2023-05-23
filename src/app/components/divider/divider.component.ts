import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  @Input() startImg: string = 'https://i.imgur.com/xYCLZr9.png';

  @Input() betweenImg: string = 'https://i.imgur.com/rjOSMqe.png';

  @Input() endImg: string = 'https://i.imgur.com/XVP5x41.png';
}
