import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts!:Account[];
  errMsg!:string;

  constructor(private accService:AccountsService) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accService.getAllAccounts().subscribe({
      next: data => this.accounts=data ,
      error: err => {console.error(err); this.errMsg="Unable to laod data! Please retry!";}
    });
  }

  delete(id:number){
    this.accService.deleteAccountById(id).subscribe({
      next: () => this.loadAccounts(),
      error: err => {console.error(err); this.errMsg="Unable to delete record! Please retry!";}
    });
  }
}
