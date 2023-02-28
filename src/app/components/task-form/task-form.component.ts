import { Component } from '@angular/core';
import { Task } from 'src/app/task';
import { Tasklist } from 'src/app/mock-list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  
  task: Task = {
    id: 0,
    title: 'task to do',
    description: 'to do description',
    dueDate: new Date(),
    location: 'add location',
  }

  generateId(): void{
    let rndID: number = Math.floor(Math.random() * 9999)+1;
    let taskId = document.getElementById("task-id") as HTMLInputElement;
    taskId.value = rndID.toString();
    this.task.id = rndID;
  }

  /* Bug - ngModel überschreibt erstellten Task */

  addTask(): void{
    /* let taskId = Tasklist.find((item)=> item.id == this.task.id);
    if(taskId == null || taskId == undefined){ */
      Tasklist.push(this.task);
      
    /* } else{
      taskId = this.task;
    } */

  }

  editTask(): void{
    let taskId = Tasklist.find((item)=> item.id == this.task.id);
    //if(taskId == null || taskId == undefined){
      //Tasklist.push(this.task);
      
    //} else{
      taskId = this.task;
    //}

  }

  /* getDate(event: Event, isStart: boolean){
    const val = (event.target as HTMLInputElement).value;
    if(isStart){
      this.task.dueDate = new Date(val);
    }
  } */
}
