import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/category';
import {TestData} from '../../data/test-data';
import {Task} from '../../model/task';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  private categories: Category[];
  @Output()
  tellToSubcribers = new EventEmitter<Category>();

  selectedCategory: Category;

  // constructor(private dataHandlerService: DataHandlerService) { }
  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    // this.categories =this.dataHandlerService.getCategories();
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    console.log(this.categories)
  }


  getTaskByCategory(category: Category) {
    // this.dataHandlerService.getTasks().filter(task => task.category === category);
   //this.dataHandler.getTasks().filter(task => task.category === category);
  }

  showTasksByCategory(category: Category) {

    // если не изменилось значение, ничего не делать (чтобы лишний раз не делать запрос данных)
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category; // сохраняем выбранную категорию

    // вызываем внешний обработчик и передаем туда выбранную категорию
    this.tellToSubcribers.emit(this.selectedCategory);

  }
}
