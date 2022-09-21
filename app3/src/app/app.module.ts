import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TaskMasterComponent } from './task-master/task-master.component';
import { TaskRowComponent } from './task-row/task-row.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HomeComponent } from './home/home.component';
import { NumberSeriesComponent } from './number-series/number-series.component';
import { NumberSeriesGroupComponent } from './number-series-group/number-series-group.component';

const routes :Routes =[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'tasks',component:TaskMasterComponent},
  {path:'nss',component:NumberSeriesGroupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskMasterComponent,
    TaskRowComponent,
    TaskFormComponent,
    HomeComponent,
    NumberSeriesComponent,
    NumberSeriesGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
