export interface Txn {
    id:number;
    ledger:string;
    type:string;
    amount:number;
    txnDate:string;
    aId?:number;
    isEditable?:boolean;
}

