import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/category';
import {TestData} from '../../data/test-data';
import {Task} from '../../model/task';
import {EditCategoryDialogComponent} from '../../dialog/edit-category-dialog/edit-category-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  @Input()
  categories: Category[];

  // выбрали категорию из списка
  @Output()
  selectCategory = new EventEmitter<Category>();

  // удалили категорию
  @Output()
  deleteCategory = new EventEmitter<Category>();

  // изменили категорию
  @Output()
  updateCategory = new EventEmitter<Category>();

  @Input()
  selectedCategory: Category;

  private indexMouseMove: number;

  // constructor(private dataHandlerService: DataHandlerService) { }

  constructor(private dataHandler: DataHandlerService,
              private dialog: MatDialog) {
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
    this.selectCategory.emit(this.selectedCategory);

  }

  // сохраняет индекс записи категории, над который в данный момент проходит мышка (и там отображается иконка редактирования)
  private showEditIcon(index: number) {
    this.indexMouseMove = index;

  }

  // диалоговое окно для редактирования категории
  // диалоговое окно для редактирования категории
  private openEditDialog(category: Category) {
    const dialogRef = this.dialog.open(EditCategoryDialogComponent, {
      data: [category.name, 'Редактирование категории'],
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'delete') { // нажали удалить

        this.deleteCategory.emit(category); // вызываем внешний обработчик

        return;
      }

      if (typeof (result) === 'string') { // нажали сохранить
        category.name = result as string;

        this.updateCategory.emit(category); // вызываем внешний обработчик
        return;
      }
    });
  }
}
