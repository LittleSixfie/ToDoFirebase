import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';
import { TodoServiceService } from '../todo-service.service';

import { YesNoPipe } from '../yes-no.pipe';
import { Timestamp } from '@angular/fire/firestore';
@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css'],
})
export class TodoReadComponent implements OnInit {
  objectReaded: Todo = {
    id: 666,
    name: 'temp',
    date2: new Date(2022, 2, 2),
    done: true,
    description: 'temp',
  };

  constructor(
    private route: ActivatedRoute,
    public service: TodoServiceService
  ) {}

  ngOnInit(): void {
    //let result: Todo = this.service.getById(this.route.snapshot.params['id']);
    this.service
      .getTodoDoc(this.route.snapshot.params['id'])
      .then((response) => {
        console.log(response.data());
        if (response.data() == undefined) {
          console.log('Not Found');
        }
        const data = response.data() as any;
        Object.keys(data)
          .filter((key) => data[key] instanceof Timestamp)
          .forEach((key) => (data[key] = data[key].toDate()));
        this.objectReaded = data;
      });
    //7ythis.objectReaded = result
  }
}
