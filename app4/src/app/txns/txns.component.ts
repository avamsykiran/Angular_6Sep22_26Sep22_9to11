import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Txn } from '../models/txn';
import { TxnsService } from '../services/txns.service';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  txns!:Txn[];
  errMsg!:string;

  aId!:number;

  constructor(private txnService:TxnsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.aId = this.activatedRoute.snapshot.params['aId'];
    this.loadData();
  }

  loadData(){
    if(this.aId){
      this.txnService.getAllTxnsByAccount(this.aId).subscribe({
        next: data => this.txns=data,
        error: err => {console.error(err); this.errMsg="Unable to load! Please retry later!";}
      });
    }
  }

  delete(id:number){
    this.txnService.deleteTxnById(id).subscribe({
      next: () => this.loadData(),
      error: err => {console.error(err); this.errMsg="Unable to delete! Please retry later!";}
    })
  }

  add(txn:Txn){
    txn.aId=this.aId;
    this.txnService.addTxn(txn).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err); this.errMsg="Unable to save! Please retry later!";}
    })
  }

  markEditable(id:number){
    let index = this.txns.findIndex(t => t.id===id);
    this.txns[index].isEditable=true;
  }
  
  unMarkEditable(id:number){
    let index = this.txns.findIndex(t => t.id===id);
    this.txns[index].isEditable=undefined;
  }

  update(txn:Txn){
    txn.isEditable=undefined;
    txn.aId=this.aId;
    this.txnService.updateTxn(txn).subscribe({
      next: data => this.loadData(),
      error: err => {console.error(err); this.errMsg="Unable to save! Please retry later!";}
    })
  }
}
