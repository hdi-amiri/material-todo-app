import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

   todoItems = [
    {
      description: 'Todo 1',
      createDate: new Date(),
      done: false
    },
    {
      description: 'Todo 2',
      createDate: new Date(),
      done: true
    }
  ]

}
