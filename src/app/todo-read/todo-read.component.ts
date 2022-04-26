import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Todo} from "../todo.model"
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css'],
})
export class TodoReadComponent implements OnInit {
  objectReaded:Todo = {
    id:666,
    name:"temp",
    date:"temp",
    done:"temp",
    description:"temp" 
  };

  constructor(private route: ActivatedRoute, public service:TodoServiceService) {}

  ngOnInit(): void {
    let result:Todo = this.service.getById(this.route.snapshot.params['id']);
    this.objectReaded = result
  }
}
