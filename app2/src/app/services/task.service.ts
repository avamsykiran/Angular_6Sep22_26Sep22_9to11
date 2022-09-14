import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[];

  constructor() {
    this.tasks=[
      {id:1,desp:"Create SRS Document",isComplete:false},
      {id:2,desp:"Create Budget Plan Document",isComplete:true},
      {id:3,desp:"Create Product BackLog",isComplete:false},
      {id:4,desp:"Create Team Allocation Plan",isComplete:false},
      {id:5,desp:"Create Sprint Plan",isComplete:false}
    ];
  }

  getAll() :Task[] {
    return this.tasks;
  }

  getById(id:number):Task | undefined{
    return this.tasks.find(t => t.id===id);
  }

  add(task:Task):void{
    this.tasks.push(task);
  }

  update(task:Task):void{
    let index = this.tasks.findIndex(t => t.id===task.id);
    this.tasks[index]=task;
  }

  deleteById(id:number):void{
    let index = this.tasks.findIndex(t => t.id===id);
    this.tasks.splice(index,1);
  }

  getCompletedCount():number{
    return this.tasks.filter(t => t.isComplete).length;
  }

  getPendingCount():number{
    return this.tasks.filter(t => !t.isComplete).length;
  }
}
