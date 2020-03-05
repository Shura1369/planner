import { Injectable } from '@angular/core';
import {PriorityDaoarrayImpl} from '../dao/impl/priority-daoarray-impl';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Priority} from '../model/priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  private priorityDaoArray = new PriorityDaoarrayImpl();


  constructor(private http: HttpClient) {
  }


  getAllPiorities(): Observable<any> {
    return this.http.get('http://localhost:8080/api/priority/list');
  }


  addPriority(priority: Priority): Observable<any> {
    return this.http.post("http://localhost:8080/api/priority/create", priority)
  }


  deletePriority(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/priority/delete/' + id);
  }


  updatePriority(priority: Priority): Observable<any> {
    return this.http.post("http://localhost:8080/api/priority/update", priority);
  }

  getPriority(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/priority/get" +id);
  }
}
