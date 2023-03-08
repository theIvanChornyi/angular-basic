import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import {TodoHeaderComponent} from "./todo-header/todo-header.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TodoHeaderComponent,
    TodoListComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
