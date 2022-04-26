import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {Todo} from "../todo.model"
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  objectReaded:Todo = {
    id:666,
    name:"temp",
    date:"temp",
    done:"temp",
    description:"temp" 
  };

  constructor(private route: ActivatedRoute, public service:TodoServiceService, private router: Router) { }

  ngOnInit(): void {
    let result:Todo = this.service.getById(this.route.snapshot.params['id']);
    this.objectReaded = result
  }

  update(){
    this.service.updateById(this.route.snapshot.params['id'], this.objectReaded);
    this.router.navigate(['/read/+' + this.route.snapshot.params['id']]);
  }

}
