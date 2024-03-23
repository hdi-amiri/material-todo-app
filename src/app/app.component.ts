import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";

import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, CommonModule,FormsModule, MatCheckboxModule],
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
