import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() cardTitle = '';
}
