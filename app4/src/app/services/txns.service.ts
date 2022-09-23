import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Txn } from '../models/txn';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl=environment.txnsApi;
  }

  getAllTxnsByAccount(aId:number) : Observable<Txn[]>{
    return this.httpClient.get<Txn[]>(`${this.apiUrl}?aId=${aId}`);
  }

  getTxnById(id:number):Observable<Txn>{
    return this.httpClient.get<Txn>(`${this.apiUrl}/${id}`);
  }

  addTxn(txn:Txn) : Observable<Txn>{
    return this.httpClient.post<Txn>(this.apiUrl,txn);
  }

  updateTxn(txn:Txn) : Observable<Txn>{
    return this.httpClient.put<Txn>(`${this.apiUrl}/${txn.id}`,txn);
  }

  deleteTxnById(id:number) : Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

}
