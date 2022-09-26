import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  @Input()
  txn:Txn;

  @Output()
  saveBtnClick:EventEmitter<Txn>;

  @Output()
  resetBtnClick:EventEmitter<number>;

  constructor() {
    this.txn={id:0,ledger:'',type:"CREDIT",amount:0,txnDate:(new Date()).toISOString().substring(0,10)};
    this.saveBtnClick=new EventEmitter<Txn>();
    this.resetBtnClick=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  save(){
    this.saveBtnClick.emit(this.txn);
    if(!this.txn.isEditable) {
      this.txn={id:0,ledger:'',type:"CREDIT",amount:0,txnDate:(new Date()).toISOString().substring(0,10)};
    }
  }

  reset(){
    if(!this.txn.isEditable) {
      this.txn={id:0,ledger:'',type:"CREDIT",amount:0,txnDate:(new Date()).toISOString().substring(0,10)};
    }else{
      this.resetBtnClick.emit(this.txn.id);
    }
  }

  chagneTxnType(type:string){
    this.txn.type=type;
  }
}
