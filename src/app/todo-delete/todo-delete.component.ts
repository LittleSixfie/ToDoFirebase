import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Todo} from "../todo.model"
import { TodoServiceService } from '../todo-service.service';


@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, public service:TodoServiceService) { }

  ngOnInit(): void {
    this.service.deleteById(this.route.snapshot.params['id'])
  }

}
