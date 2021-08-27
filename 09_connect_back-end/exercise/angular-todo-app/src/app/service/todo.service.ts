import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  save(todo): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.API_URL + '/' + id);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.API_URL + '/' + id, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.API_URL + '/' + id);
  }

}
