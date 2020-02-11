
import {Category} from '../model/category';
import {Priority} from '../model/priority';
import {Task} from '../model/task';

export class TestData {


  static categories: Category[] = [
    {id: 1, name: 'Работа', icon: 'work'},
    {id: 2, name: 'Семья', icon: 'home'},
    {id: 3, name: 'Учеба', icon: 'school'},
    {id: 4, name: 'Отдых', icon: 'event_seat'},
    {id: 5, name: 'Спорт', icon: 'directions_bike'},
    {id: 6, name: 'Еда', icon: 'fastfood'},
    {id: 7, name: 'Финансы', icon: 'show_chart'},
    {id: 8, name: 'Гаджеты', icon: 'devices'},
    {id: 9, name: 'Здоровье', icon: 'enhanced_encryption'},
    {id: 10, name: 'Автомобиль', icon: 'drive_eta'},
    {id: 11, name: 'Ремонт', icon: 'format_paint'}
  ];

  static priorities: Priority[] = [
    {id: 1, name: 'Низкий', color: '#e5e5e5'},
    {id: 2, name: 'Средний', color: '#85D1B2'},
    {id: 3, name: 'Высокий', color: '#F1828D'},
    {id: 4, name: 'Очень срочно!!', color: '#F1128D'}
  ];

  // не забывать - индексация приоритетов и категорий начинается с нуля
  static tasks: Task[] = [
    {
      id: 1,
      name: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    },

    {
      id: 2,
      name: 'Передать отчеты в налоговую',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11')
    },

    {
      id: 3,
      name: 'Убраться у себя в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      name: 'Сходить на каток с семьей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 5,
      name: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      name: 'Сходить на семинар по Котлину',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11')
    },

    {
      id: 7,
      name: 'Найти билеты в Венгрию, выбрать отель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      name: 'Приготовить ужин для всей семьи (семга с картошкой)',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      name: 'Подтянуться 10 раз',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 10,
      name: 'Пробежать 100 м',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      name: 'Организовать детский праздник ',
      completed: false
    },

    {
      id: 12,
      name: 'Сходить на лекцию "Как научиться программировать на Пайтон"',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      name: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11')
    },

    {
      id: 14,
      name: 'Провести собрание по поводу всех проектов',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      name: 'Сдать экзамен по Java Oracle',
      priority: TestData.priorities[2],
      completed: true
    },


    {
      id: 16,
      name: 'Положить 100 грн в банк на депозит',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      name: 'Попросить аванс на работе',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      name: 'Сдать анализы, проверить гемоглобин',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')

    },

    {
      id: 19,
      name: 'Сравнить новый айпад с самсунгом',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')

    },

    {
      id: 20,
      name: 'Футбол с сотрудниками',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17')

    }

  ];






}



