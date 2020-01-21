import { Component, OnInit } from '@angular/core';
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

  categories: Category[];
  selected: Category;

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {
    this.categories =this.dataHandlerService.getCategories();
    console.log(this.categories)
  }


  getTaskByCategory(category: Category){
    this.dataHandlerService.getTasks().filter(task => task.category === category);}

  showTasksByCategory(category: Category) {
    this.selected = category;
    this.dataHandlerService.fetchTasksByCategory(category);}

  }
