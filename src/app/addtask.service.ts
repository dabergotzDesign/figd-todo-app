import { Injectable } from '@angular/core';
import { Tasklist } from './mock-list';
import { Task } from './task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddtaskService {

  constructor(private httpClient: HttpClient) { }

  tasksURL:string = 'api/tasks';

  getTasks(): Observable<Task[]>{
      const response = this.httpClient.get<Task[]>(this.tasksURL);
      console.log(response);
      return response;
  } 

  getTaskByID(id: number): Observable<Task>{
    const response = this.httpClient.get<Task>(this.tasksURL + '/' + id);
    return response;    
  }

  addNewTask(task: Task): Observable<Task>{
    const response = this.httpClient.post<Task>(this.tasksURL, task);

    console.log('addNewTask response: ',response);
    console.log('addNewTask task: ',task);

    return response;
  }

  /* updateTasks(task: Task): void{
    let currentTask = this.getTaskByID(task.id);
    currentTask = task;
  } */

  delete(task: Task): Observable<Task> {
    const response = this.httpClient.delete<Task>(
      this.tasksURL + '/' + task.id
    );
    return  response;
  }

}
