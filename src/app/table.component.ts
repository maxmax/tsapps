import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TableHero } from './tablehero';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
`
})
export class TableComponent {
  title = 'Tour of Heroes';
  heroes = [
    new TableHero(1, 'Yoki'),
    new TableHero(13, 'Spoke'),
    new TableHero(15, 'Magnuta'),
    new TableHero(20, 'Mornava')
  ];
  myHero = this.heroes[0];
}
