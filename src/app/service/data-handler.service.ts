import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {TestData} from '../data/test-data';
import {Task} from '../model/task';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  constructor() { }

  taskSubject = new Subject<Task[]>();


  getCategories(): Category[] {
    return  TestData.categories;
  }

  fetchTasks(){
    this.taskSubject.next(TestData.tasks);
  }

getTasks(): Task[]{
    return TestData.tasks;
}
  getTasksByCategory(category: Category): Task[] {
    const tasks = TestData.tasks.filter(task => task.category === category);
    console.log(tasks);
    return tasks;
  }

  fetchTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    console.log(tasks);
    this.taskSubject.next(tasks);
  }

}
