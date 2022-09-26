import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-row',
  templateUrl: './txn-row.component.html',
  styleUrls: ['./txn-row.component.css']
})
export class TxnRowComponent implements OnInit {

  @Input()
  t!:Txn;

  @Output()
  editBtnClick:EventEmitter<number>;

  @Output()
  deleteBtnClick:EventEmitter<number>;

  constructor() {
    this.editBtnClick=new EventEmitter<number>();
    this.deleteBtnClick=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }


  edit(){
    this.editBtnClick.emit(this.t.id);
  }

  delete(){
    this.deleteBtnClick.emit(this.t.id);
  }
}
