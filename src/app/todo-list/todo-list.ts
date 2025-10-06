import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true, 
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodo = '';
  private apiUrl = 'http://127.0.0.1:8000/api/todos'; // Laravel API

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.todos = data;
    });
  }

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    this.http.post(this.apiUrl, { title: this.newTodo }).subscribe(() => {
      this.getTodos();
      this.newTodo = '';
    });
  }

  deleteTodo(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.getTodos();
    });
  }
}