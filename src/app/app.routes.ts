import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: 'add-todo',
    component: AddTodoComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: '**',
    redirectTo: 'todo-list',
  },
];
