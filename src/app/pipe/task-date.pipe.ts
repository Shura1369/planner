
import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

// преобразовывает дату в нужный текстовый формат
@Pipe({
  name: 'taskDate'
})
export class TaskDatePipe extends DatePipe implements PipeTransform {

  transform(date: Date | string, format: string = 'mediumDate'): string { // mediumDate - форматирование по-умолчанию

    if (date == null) {
      return 'Без срока';
    }

    date = new Date(date);

    var currentDate = new Date();
    var yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    var tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);


if(date.getFullYear()===currentDate.getFullYear()) {

  if (date.getDate() === currentDate.getDate()) {

    return 'Сегодня';
  }

  if (date.getDate() === yesterday.getDate()) {
    console.log(date);
    return 'Вчера';
  }

  if (date.getDate() === tomorrow.getDate()) {
    return 'Завтра';
  }
}

    return new DatePipe('ru-RU').transform(date, format); // показывать дату в нужной локали
  }

}
