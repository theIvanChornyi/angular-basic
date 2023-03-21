import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from "./post/post.component";
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import {TodoHeaderComponent} from "./todo-header/todo-header.component";
import { StatisticsComponent } from './statistics/statistics.component';
import { LogoComponent } from './logo/logo.component';
import { TwoWaysComponent } from './two-ways/two-ways.component';
import { FormsModule } from '@angular/forms';
import { ConditionalRenderComponent } from './conditional-render/conditional-render.component';
import { CicleRenderComponent } from './cicle-render/cicle-render.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TodoHeaderComponent,
    TodoListComponent,
    ListItemComponent,
    StatisticsComponent,
    LogoComponent,
    TwoWaysComponent,
    ConditionalRenderComponent,
    CicleRenderComponent,
    PipeComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
