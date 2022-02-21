import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/frontend';
import { Todo } from '@todo-list/schema/todo';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  api = `${environment.apiUrl}/todo`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.api}`);
  }

  getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.api}/id/${id}`);
  }

  getByname(name: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.api}/name/${name}`);
  }

  create(body: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.api, body);
  }

  update(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.api}/${id}`, todo);
  }

  completeTask(id: string, date: {date: Date}): Observable<Todo> {
    return this.http.put<Todo>(`${this.api}/complete/${id}`, date);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
