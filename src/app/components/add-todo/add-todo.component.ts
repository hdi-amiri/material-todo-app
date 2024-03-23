import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from '../../services/todo.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  descriptionFormControl = new FormControl();
  doneFormControl = new FormControl();

  constructor(private todoService: TodoService, private router: Router) {}

  public submit(): void {
    this.todoService.addTodo({
      description: this.descriptionFormControl.value as string,
      done: this.doneFormControl.value as boolean,
      createDate: new Date().getTime(),
    });

    this.router.navigate(['/todo-list']);
  }
}
