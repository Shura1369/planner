import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../model/task';
import {DataHandlerService} from '../../service/data-handler.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  displayedColumns: string[] = ['color', 'id', 'name', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы

  @ViewChild(MatSort, {static: false}) private sort: MatSort;


  tasks: Task[];
  constructor(private dataHandler: DataHandlerService) { }

  // ngOnInit() {
  //   this.tasks = this.dataHandler.getTasks()
  // }
  ngOnInit() {
    //  this.tasks = this.dataHandler.getTasks();
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
    this.dataSource = new MatTableDataSource();
   // this.dataSource.sort = this.sort;

    this.refreshTable();

  }

  ngAfterViewInit(): void {

    this.addTableObjects();

  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  private getPriorityColor(task: Task) {

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';

  }
  private refreshTable() {

    this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)


  }

  private addTableObjects() {
    this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
    // this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)
  }

}
