import { Injectable } from '@angular/core';
import { Todo } from "./todo.model"
import { Router } from '@angular/router';
import { NotFoundError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  list:Todo[] = [{
    id:1,
    name:"Nombre Tarea",
    date:"20/04/2022",
    done:"Acabada?",
    description:"Esto es una prueba",
  },]

  id:number=0;

  
  constructor(private router: Router) { }

  get getLista(): Todo[]{
    return this.list;
  }

  addTodo(tarea:Todo){
    this.id++
    tarea.id = this.id;
    this.list.push(tarea);
    this.router.navigate([''])
  }

  getById(searchId:number):Todo {
    let res = this.list.find(searchObj => searchObj.id == searchId);
    if(res !=undefined){
      return res
    }
    let failed:Todo={
      id:0,
      name:"NOT FOUND"
    }
    return failed;
  }

  deleteById(searchId:number) {
    let res = this.list.find(searchObj => searchObj.id == searchId);
    console.log(res)
    if(res !=undefined){
      this.list.splice(this.list.indexOf(res , 0), 1)
    }
    
  }

  updateById(searchId:number, updatedTodo:Todo) {
    let res = this.list.find(searchObj => searchObj.id == searchId);
    console.log(res)
    if(res !=undefined){
      let index =this.list.indexOf(res , 0);
      this.list[index] = updatedTodo;
      console.log(this.list[index])
    }
    
  }
}
