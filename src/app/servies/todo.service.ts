import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../components/models/Todo';
import { Observable } from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({
    'content-type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string= 'https://jsonplaceholder.typicode.com/todos';
  todosLimt='?_limit=5'

  constructor(private http:HttpClient) { }

  // get todos
  getTodos():Observable<Todo[]>{
     return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimt}`);
  }
// togglecompleted
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions);
  }}
