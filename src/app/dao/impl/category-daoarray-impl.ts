import {CategoryDao} from '../interface/category-dao';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';

export class CategoryDaoarrayImpl implements CategoryDao{

  add(T): Observable<Category> {
    return undefined;
  }

  delete(id: number): Observable<Category> {
    return undefined;
  }

  get(id: number): Observable<Category> {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return undefined;
  }

  search(title: string): Observable<Category> {
    return undefined;
  }

  update(T): Observable<Category> {
    return undefined;
  }
}
