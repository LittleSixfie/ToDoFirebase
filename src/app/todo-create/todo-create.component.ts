import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent implements OnInit {
  name: string = '';
  description: string = '';
  date: Date = new Date(2000, 2, 2);
  done: boolean = true;
  id: number = 0;
  date2:Date = new Date;

  constructor(public service: TodoServiceService, private app: AppComponent) {}

  ngOnInit(): void {}

  add() {
    if(!(this.name == "") || !(this.description == "")){
      let newTodo: Todo = {
        name: this.name,
        id: this.id,
        description: this.description,
        date2: this.date2,
        done: this.done,
      };
      //this.service.addTodo(newTodo);
      this.service.createTodoDoc(newTodo);
      this.app.refrescar()
    }
  }
}
