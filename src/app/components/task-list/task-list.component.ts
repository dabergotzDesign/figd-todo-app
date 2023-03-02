import { Component } from '@angular/core';
//import { Tasklist } from 'src/app/mock-list';
import { AddtaskService } from 'src/app/addtask.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
constructor(private addTaskService: AddtaskService){}

  task: Task[] = [];

  ngOnInit(){
    this.addTaskService.getTasks().subscribe((res) =>{
      console.log(res);
      this.task = res;
    });
  }

  delete(task: Task): void {
    this.addTaskService.delete(task).subscribe();
    this.task = this.task.filter((item) => item !== task)
  }
}
