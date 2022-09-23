import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TxnsComponent } from './txns/txns.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/accounts"},
  {path:"accounts",component:AccountsComponent},
  {path:"add",component:AccountFormComponent},
  {path:"edit/:id",component:AccountFormComponent},
  {path:"txns/:aId",component:TxnsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
