import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {Task} from '../model/task';
import {TestData} from '../data/test-data';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TaskDAOArrayImpl} from '../dao/impl/task-daoarray-impl';
import {CategoryDaoarrayImpl} from '../dao/impl/category-daoarray-impl';
import {Priority} from '../model/priority';
import {PriorityDaoarrayImpl} from '../dao/impl/priority-daoarray-impl';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class DataHandlerService {

  private taskDaoArray = new TaskDAOArrayImpl();
  private categoryDaoArray = new CategoryDaoarrayImpl();
  private priorityDaoArray = new PriorityDaoarrayImpl();


  constructor(private http: HttpClient) {
  }
  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]>{
    console.log( this.categoryDaoArray.getAll())
    return  this.categoryDaoArray.getAll();
  }
  getAllPiorities(): Observable<any>{
   // return  this.priorityDaoArray.getAll();
    return this.http.get('http://localhost:8080/api/priority/list');
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

  // addPriority(priority: Priority): Observable<Priority> {
  //   return this.priorityDaoArray.add(priority);
  // }
  addPriority(priority: Priority): Observable<any> {
    return this.http.post("http://localhost:8080/api/priority/create", priority)
  }


  // deletePriority(id: number): Observable<any> {
  //   return this.priorityDaoArray.delete(id);
  // }

  deletePriority(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/priority/delete/' + id);
  }


  // updatePriority(priority: Priority): Observable<Priority> {
  //   return this.priorityDaoArray.update(priority);
  // }

  updatePriority(priority: Priority): Observable<any> {
    return this.http.post("http://localhost:8080/api/priority/update", priority);
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
