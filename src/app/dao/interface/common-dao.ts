import {Observable} from 'rxjs';

export interface CommonDao<T> {
  getAll(): Observable<T[]>;
  get(id: number): Observable<T>; // получение значения по уникальному id
  update(T): Observable<T>;
  delete(id: number): Observable<T>; // удаление по id
  add(T): Observable<T>;
}
