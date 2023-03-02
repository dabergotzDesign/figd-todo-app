import { Component } from '@angular/core';
import { Task } from 'src/app/task';
import { AddtaskService } from 'src/app/addtask.service';
//import { Tasklist } from 'src/app/mock-list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  constructor(private addTaskService: AddtaskService, private router: Router, private activatedRoute: ActivatedRoute){}

  //private router: Router, private activatedRoute: ActivatedRoute

  status: Boolean = false;

  ngOnInit(){
    if(this.router.url != '/add'){
      const taskID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.addTaskService.getTaskByID(taskID).subscribe((res)=>{
        console.log("getTaskByID: ", res);
        this.task = res;
      });   
    }
  }
  
  task: Task = {
    id: 0,
    title: 'task to do',
    description: 'to do description',
    dueDate: new Date(),
    location: 'add location',
  }

  
  /* Bug - ngModel überschreibt erstellten Task */

  //save()
  addTask(): void{
      //Tasklist.push(this.task);
      this.addTaskService.addNewTask(this.task).subscribe((result) => {
        console.log('addTask-res',result);
      });
      this.router.navigate(['tasks']);
      
  };


  generateId(): void{
    let rndID: number = Math.floor(Math.random() * 9999)+1;
    let taskId = document.getElementById("task-id") as HTMLInputElement;
    taskId.value = rndID.toString();
    this.task.id = rndID;
  }


  hideForm(){
    
    this.status = !this.status;
    let hideBtn = document.getElementById("form-hide") as HTMLButtonElement;
    if(this.status){
      hideBtn.style.transform = 'rotate(180deg)';
    }else{
      hideBtn.style.transform = 'rotate(0deg)';
    }
  }

  /* getDate(event: Event, isStart: boolean){
    const val = (event.target as HTMLInputElement).value;
    if(isStart){
      this.task.dueDate = new Date(val);
    }
  } */
}
