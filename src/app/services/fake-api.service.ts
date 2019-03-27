import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pizza } from '../models/pizza';

export class FakeApi implements InMemoryDbService {
  createDb(): Object{
    const pizzas : Pizza[] = [
      { id: 1, name: 'Reine', price: 12.99, photo: 'pizza-1.jpg' },
      { id: 2, name: '4 fromages', price: 13.99, photo: 'pizza-2.jpg' },
      { id: 3, name: 'Orientale', price: 11.99, photo: 'pizza-3.jpg' },
      { id: 4, name: 'Cannibale', price: 9.99, photo: 'pizza-4.jpg' }
    ];
    return {pizzas};
  }
}
