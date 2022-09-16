import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-master',
  templateUrl: './task-master.component.html',
  styleUrls: ['./task-master.component.css']
})
export class TaskMasterComponent implements OnInit {

  tasks!:Task[];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.tasks=this.taskService.getAll();
  }

  delete(id:number){
    this.taskService.deleteById(id);
    this.loadData();
  }

  add(task:Task){
    this.taskService.add(task);
    this.loadData();
  }

  markEditable(id:number){
    let index = this.tasks.findIndex(t => t.id===id);
    this.tasks[index].isEditable=true;
  }
  
  unMarkEditable(id:number){
    let index = this.tasks.findIndex(t => t.id===id);
    this.tasks[index].isEditable=undefined;
  }

  update(task:Task){
    task.isEditable=undefined;
    this.taskService.update(task);
    this.loadData();
  }

}
