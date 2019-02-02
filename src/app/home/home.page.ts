import { Component, OnInit } from '@angular/core';
import {Todo, TodoService } from '../service/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // all Todos
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
}
