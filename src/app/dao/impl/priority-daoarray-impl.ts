import {PriorityDao} from '../interface/priority-dao';
import {Observable, of} from 'rxjs';
import {Priority} from '../../model/priority';
import {TestData} from "../../data/test-data";

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
    return of(TestData.priorities);
  }

  update(T): Observable<Priority> {
    return undefined;
  }
}
