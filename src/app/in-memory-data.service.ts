import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'},
      {id: 21, name: 'Tomato'}
    ];
    let events = [
      {id: 1, name: 'Mr. Nice', text: 'Lorenium ipsum'},
      {id: 2, name: 'Narco', text: 'Lorenium ipsum2'},
      {id: 3, name: 'Bombasto', text: 'Lorenium ipsum2'}
    ];
    return {heroes, events};

  }
}
