import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private TodoList: Todo[] = [];

  addTodo(item: Todo) {
    this.TodoList.push(item);
  }

  getTodoList() {
    return this.TodoList;
  }
}
