import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from "@angular/material/checkbox";

import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

   todoItems: Todo[] = [
    {
      description: 'Todo 1',
      createDate: new Date().getTime(),
      done: false
    },
    {
      description: 'Todo 2',
      createDate: new Date().getTime(),
      done: true
    }
  ]
}
