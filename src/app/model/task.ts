import {Priority} from './priority';
import {Category} from './category';

export class Task {
  id: number;
  name: string;
  completed: boolean;
  priority?: Priority;
  category?: Category;
  date?: Date;

  constructor(id: number, name: string, completed: boolean, priority?: Priority, category?: Category, date?: Date) {
    this.id = id;
    this.name = name;
    this.completed = completed;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}
