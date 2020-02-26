import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {Task} from '../model/task';
import {TestData} from '../data/test-data';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskDAOArrayImpl} from '../dao/impl/task-daoarray-impl';
import {CategoryDaoarrayImpl} from '../dao/impl/category-daoarray-impl';
import {Priority} from '../model/priority';
import {PriorityDaoarrayImpl} from '../dao/impl/priority-daoarray-impl';

@Injectable()
export class DataHandlerService {

  private taskDaoArray = new TaskDAOArrayImpl();
  private categoryDaoArray = new CategoryDaoarrayImpl();
  private priorityDaoArray = new PriorityDaoarrayImpl();


  constructor() {
  }
  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]>{
    console.log( this.categoryDaoArray.getAll())
    return  this.categoryDaoArray.getAll();
  }
  getAllPiorities(): Observable<Priority[]>{
    return  this.priorityDaoArray.getAll();
  }

  // поиск задач по параметрам
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority);
  }

  searchCategories(title: string): Observable<Category[]> {
    return this.categoryDaoArray.search(title);
  }
  updateTask(task: Task): Observable<Task> {
    return this.taskDaoArray.update(task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.taskDaoArray.delete(id);
  }


  updateCategory(category: Category): Observable<Category> {
    return this.categoryDaoArray.update(category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.categoryDaoArray.delete(id);
  }

  addTask(task: Task): Observable<Task> {
    return this.taskDaoArray.add(task);
  }

  addCategory(title: string): Observable<Category> {
    return this.categoryDaoArray.add(new Category(null, title, 'work'));
  }


  // статистика

  getCompletedCountInCategory(category: Category): Observable<number> {
    return this.taskDaoArray.getCompletedCountInCategory(category);
  }

  getUncompletedTotalCount(): Observable<number> {
    return this.taskDaoArray.getUncompletedCountInCategory(null);
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return this.taskDaoArray.getUncompletedCountInCategory(category);
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return this.taskDaoArray.getTotalCountInCategory(category);
  }

  addPriority(priority: Priority): Observable<Priority> {
    return this.priorityDaoArray.add(priority);
  }

  deletePriority(id: number): Observable<Priority> {
    return this.priorityDaoArray.delete(id);
  }

  updatePriority(priority: Priority): Observable<Priority> {
    return this.priorityDaoArray.update(priority);
  }

}



// import { Injectable } from '@angular/core';
// import {Category} from '../model/category';
// import {TestData} from '../data/test-data';
// import {Task} from '../model/task';
// import {BehaviorSubject, Subject} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DataHandlerService {
//
//
//   taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
//   categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
//
//   constructor() {
//     this.fetchTasks();
//   }
//
//   getCategories(): Category[] {
//     return  TestData.categories;
//   }
//
//   fetchTasks(){
//     this.taskSubject.next(TestData.tasks);
//   }
//
//
//   getTasks(): Task[]{
//     return TestData.tasks;
//   }
//   getTasksByCategory(category: Category): Task[] {
//     const tasks = TestData.tasks.filter(task => task.category === category);
//     console.log(tasks);
//     return tasks;
//   }
//
//   fetchTasksByCategory(category: Category) {
//     const tasks = TestData.tasks.filter(task => task.category === category);
//     console.log(tasks);
//     this.taskSubject.next(tasks);
//   }
//
// }
