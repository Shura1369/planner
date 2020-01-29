import {PriorityDao} from '../interface/priority-dao';
import {Observable} from 'rxjs';
import {Priority} from '../../model/priority';

export class PriorityDaoarrayImpl implements PriorityDao{
  add(T): Observable<Priority> {
    return undefined;
  }

  delete(id: number): Observable<Priority> {
    return undefined;
  }

  get(id: number): Observable<Priority> {
    return undefined;
  }

  getAll(): Observable<Priority[]> {
    return undefined;
  }

  update(T): Observable<Priority> {
    return undefined;
  }
}
