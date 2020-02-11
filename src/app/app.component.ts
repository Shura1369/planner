import { Component } from '@angular/core';
import {DataHandlerService} from './service/data-handler.service';
import {Category} from './model/category';
import { Task } from './model/task';
import {Priority} from "./model/priority";
//modal window
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planner';

  tasks: Task[];
  categories: Category[];
  priorities: Priority[];

  private selectedCategory: Category = null;

  constructor(
    private dataHandler: DataHandlerService, // фасад для работы с данными
  ) {
  }

  ngOnInit(): void {
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    // this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    this.dataHandler.getAllPiorities().subscribe(priorities => this.priorities = priorities);

    this.onSelectCategory(null); // показать все задачи
  }


  private onSelectCategory(category: Category) {

    this.selectedCategory = category;

    this.dataHandler.searchTasks(
      this.selectedCategory,
      null,
      null,
      null
    ).subscribe(tasks => {
      this.tasks = tasks;
    });

  }

  // onUpdateTask(task: Task) {
  //   console.log(task)
  // }
  onUpdateTask(task: Task) {
    this.dataHandler.updateTask(task).subscribe(() => {
      this.dataHandler.searchTasks(
        this.selectedCategory,
        null,
        null,
        null
      ).subscribe(tasks => {
        this.tasks = tasks;
      });
    });
    console.log(task.name);
    console.log(task.priority);
  }
}
