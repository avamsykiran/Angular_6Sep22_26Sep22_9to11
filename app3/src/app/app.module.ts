import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskMasterComponent } from './task-master/task-master.component';
import { TaskRowComponent } from './task-row/task-row.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskMasterComponent,
    TaskRowComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
