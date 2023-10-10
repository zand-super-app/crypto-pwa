import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  @Input() icon?: string;
  @Input() title?: string;
  @Input() quantity?: string;
  @Input() currencyValue?: string;
  @Input() change?: string;
  @Input() changeType?: string;
}
