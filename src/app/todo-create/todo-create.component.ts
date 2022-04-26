import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import {Todo} from '../todo.model'

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  name:string ="";
  description:string ="";
  date:string ="";
  done:string ="";
  id:number = 0;

  
  constructor(public service:TodoServiceService){
    
  }

  ngOnInit(): void {
  }

  add(){
    let newTodo:Todo={
      name:this.name,
      id:this.id,
      description:this.description,
      date:this.date,
      done:this.done,
    }
    this.service.addTodo(newTodo)
  }

}
