import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Event }                from './event';
import { EventService }         from './event.service';

@Component({
  selector: 'my-app',
  template: `
  <br />
  <h1>{{title}}</h1>
  <ul class="events">
    <li *ngFor="let event of events" (click)="onSelect(event)"
        [class.selected]="event === selectedEvent">
      <span class="badge">{{event.id}}</span>
      <span>{{event.name}}</span>
      <p>{{event.text}}</p>
    </li>
  </ul>
`
})
export class EventsComponent {
  title = 'Events';

  events: Event[];
  selectedEvent: Event;

  constructor(
    private eventService: EventService,
    private router: Router) { }

  getEvents(): void {
    this.eventService
        .getEvents()
        .then(events => this.events = events);
  }

  ngOnInit(): void {
    this.getEvents();
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

}
