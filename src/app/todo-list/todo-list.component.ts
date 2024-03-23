import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from '../todo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatButtonModule, CommonModule, FormsModule, MatCheckboxModule, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoItems: Todo[] = [
    {
      description: 'Todo 1',
      createDate: new Date().getTime(),
      done: false,
    },
    {
      description: 'Todo 2',
      createDate: new Date().getTime(),
      done: true,
    },
  ];
}
