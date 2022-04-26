import { Component } from '@angular/core';
import {TodoServiceService} from './todo-service.service'
import {Todo } from "./todo.model" 
import {Router} from '@angular/router'

import { YesNoPipe } from './yes-no.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  listShow:Todo[] = [{
    id:1,
    name:"Ejemplo",
    date2:new Date(2022,2,2),
    done:true,
    description:"Example description" 
  }];

  constructor(public service:TodoServiceService, private router: Router){
    let list:Todo[] = [];
    this.service.getTodos().then(value => {
      list = value;
      this.listShow = value
    })

  }

  refrescar(){
    this.listShow = this.service.getLista
  }

  leer(id:number){
    this.router.navigate(['/read/'+id]);
  }

  borrar(id:number){
    this.service.deleteById(id);
  }

  update(id:number){
    this.router.navigate(['/update/'+id]);
  }
}
