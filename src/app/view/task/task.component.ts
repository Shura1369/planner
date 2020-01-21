import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/task';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  constructor(private dataHandler: DataHandlerService) { }

  // ngOnInit() {
  //   this.tasks = this.dataHandler.getTasks()
  // }
  ngOnInit() {
    //  this.tasks = this.dataHandler.getTasks();
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
