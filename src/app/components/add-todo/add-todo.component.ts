import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

}
