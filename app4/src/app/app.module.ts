import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountRowComponent } from './account-row/account-row.component';
import { TxnsComponent } from './txns/txns.component';
import { TxnRowComponent } from './txn-row/txn-row.component';
import { TxnFormComponent } from './txn-form/txn-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountFormComponent,
    AccountRowComponent,
    TxnsComponent,
    TxnRowComponent,
    TxnFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
