import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task:Task;

  @Output()
  saveBtnClick:EventEmitter<Task>;

  constructor() {
    this.task={id:0,desp:'',isComplete:false};
    this.saveBtnClick=new EventEmitter<Task>();
  }

  ngOnInit(): void {
  }

  save(){
    this.saveBtnClick.emit(this.task);
    this.task={id:0,desp:'',isComplete:false};
  }

  reset(){
    this.task={id:0,desp:'',isComplete:false};
  }
}
