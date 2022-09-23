import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  account:Account;
  isEditing:boolean;
  errMsg!:string;

  constructor(private accService:AccountsService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.account = {id:0,name:'',mobile:''};
    this.isEditing=false;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.isEditing=true;
      this.accService.getAccountById(id).subscribe({
        next: data => this.account=data,
        error: err => {console.error(err);this.errMsg="Unable to fetech record! Please retry later!"}
      })
    }
  }

  save(){
    let ob = null;

    if(this.isEditing){
      ob = this.accService.updateAccount(this.account);
    }else{
      ob = this.accService.addAccount(this.account);
    }

    ob.subscribe({
      next: data => this.router.navigateByUrl("/accounts") ,
      error: err => {console.error(err);this.errMsg="Unable to save record! Please retry later!"}
    })
  }
}
