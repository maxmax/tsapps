import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <ul>
    <li>Dota 2</li>
    <li>Hearthstone</li>
  </ul>
`
})
export class EventsComponent {
  title = 'Events';
}
