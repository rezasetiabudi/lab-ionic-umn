import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: Todo[];

  constructor(
    private todoSvc: TodoService
  ) {}


  ngOnInit(): void {
    this.todoSvc.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoSvc.removeTodo(item.id);
  }

}
