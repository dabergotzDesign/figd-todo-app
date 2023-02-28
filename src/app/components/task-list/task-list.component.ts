import { Component } from '@angular/core';
import { Tasklist } from 'src/app/mock-list';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  task= Tasklist;

  delete(Task: Task): void {
    const index = Tasklist.indexOf(Task);
    Tasklist.splice(index, 1);
  }
}
