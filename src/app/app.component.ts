import { Component, OnInit } from '@angular/core';
import { ITodo, TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todoList: ITodo[] = [];
  public title = '';
  public loading = false;
  public error = '';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.loading = true;
    this.error = '';
    this.todosService.getTodos().subscribe(r => {
      this.todoList = r;
      this.loading = false;
    });
  }

  addTodo() {
    if (!this.title.trim()) return;

    const todo: ITodo = { title: this.title, completed: false };

    this.todosService.addTodo(todo).subscribe(r => {
      this.todoList.unshift(r);
      this.title = '';
    });
  }

  compliteTodo(id: number | undefined) {
    if (!id) return;

    this.todosService.compliteTodo(id).subscribe({
      next: () => {
        this.todoList = this.todoList.map(todo =>
          todo.id === id ? { ...todo, completed: true } : todo
        );
      },
      error: e => (this.error = e.message),
    });
  }

  deleteTodo(id: number | undefined) {
    if (!id) return;

    this.todosService.deleteTodo(id).subscribe(() => {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    });
  }
}
