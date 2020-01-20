import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {TestData} from '../data/test-data';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  constructor() { }

  getCategories(): Category[] {
    return  TestData.categories;
  }

getTasks(): Task[]{
    return TestData.tasks;
}

}
