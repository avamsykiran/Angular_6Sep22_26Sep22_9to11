import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent implements OnInit {

  @Input()
  t!:Task;

  @Output()
  deleteBtnClick:EventEmitter<number>;

  @Output()
  editBtnClick:EventEmitter<number>;

  constructor() {
    this.deleteBtnClick = new EventEmitter<number>();
    this.editBtnClick = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  delete(){
    this.deleteBtnClick.emit(this.t.id);
  }

  edit(){
    this.editBtnClick.emit(this.t.id);
  }
}
