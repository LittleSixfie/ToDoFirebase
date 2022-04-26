import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {Todo} from "../todo.model"
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';
import { Timestamp } from '@angular/fire/firestore';


@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  objectReaded:Todo = {
    id:666,
    name:"temp",
    date2:new Date,
    done:true,
    description:"temp" 
  };

  constructor(private route: ActivatedRoute, public service:TodoServiceService, private router: Router) {

   }

  async ngOnInit(): Promise<void> {
    let result:Todo ={
      id: 0
    }
    await this.service.getTodoDoc(this.route.snapshot.params['id']).then(response => {
      const data = response.data() as any;
      Object.keys(data)
        .filter((key) => data[key] instanceof Timestamp)
        .forEach((key) => (data[key] = data[key].toDate()));
      result = data;
    });
    this.objectReaded = result
  }

  update(){
    this.service.updateDoc(this.route.snapshot.params['id'], this.objectReaded);
    this.router.navigate(['']);
  }

}
