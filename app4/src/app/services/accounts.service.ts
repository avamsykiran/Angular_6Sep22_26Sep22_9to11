import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  apiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.accountsApi;
  }

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.apiUrl);
  }

  getAccountById(id: number): Observable<Account> {
    //return this.httpClient.get<Account>(this.apiUrl + "/" + id);
    return this.httpClient.get<Account>(`${this.apiUrl}/${id}`);
  }

  addAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(this.apiUrl, account);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.httpClient.put<Account>(`${this.apiUrl}/${account.id}`, account);
  }

  deleteAccountById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}