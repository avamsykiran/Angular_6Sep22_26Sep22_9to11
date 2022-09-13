import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks:Stock[];
  stock:Stock;

  constructor() {
    this.stocks=[
      {id:1,name:"Rice Bag 25Kg",quantityInHand:500,quantitySold:300},
      {id:2,name:"Rice Packet 5Kg",quantityInHand:400,quantitySold:50},
      {id:3,name:"Rice Packet 1Kg",quantityInHand:400,quantitySold:200}
    ];

    this.stock = {id:0,name:'',quantityInHand:0,quantitySold:0};
  }

  ngOnInit(): void {
  }

  add(){
    this.stocks.push(this.stock);
    this.stock = {id:0,name:'',quantityInHand:0,quantitySold:0};
  }

  deleteById(stockId:number){
    let index = this.stocks.findIndex(s => s.id===stockId);
    if(index>-1){
      this.stocks.splice(index,1);
    }
  }
}
