import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task:Task;

  @Output()
  saveBtnClick:EventEmitter<Task>;

  @Output()
  resetBtnClick:EventEmitter<number>;

  constructor() {
    this.task={id:0,desp:'',isComplete:false};
    this.saveBtnClick=new EventEmitter<Task>();
    this.resetBtnClick=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  save(){
    this.saveBtnClick.emit(this.task);
    if(!this.task.isEditable) {
      this.task={id:0,desp:'',isComplete:false};
    }
  }

  reset(){
    if(!this.task.isEditable) {
      this.task={id:0,desp:'',isComplete:false};
    }else{
      this.resetBtnClick.emit(this.task.id);
    }
  }
}
