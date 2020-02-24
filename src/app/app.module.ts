import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './view/category/category.component';
import {DataHandlerService} from './service/data-handler.service';
import { TaskComponent } from './view/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule

} from '@angular/material';
import { EditTaskDialogComponent } from './dialog/edit-task-dialog/edit-task-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { TaskDatePipe } from './pipe/task-date.pipe';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { EditCategoryDialogComponent } from './dialog/edit-category-dialog/edit-category-dialog.component';
import { FooterComponent } from './view/footer/footer.component';
import { AboutDialogComponent } from './dialog/about-dialog/about-dialog.component';

registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TaskComponent,
    EditTaskDialogComponent,
    ConfirmDialogComponent,
    TaskDatePipe,
    EditCategoryDialogComponent,
    FooterComponent,
    AboutDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule

  ],
  providers: [DataHandlerService],
  entryComponents:[EditTaskDialogComponent,
                  ConfirmDialogComponent,
                  EditCategoryDialogComponent,
                  AboutDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
