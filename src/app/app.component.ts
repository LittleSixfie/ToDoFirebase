import { Component } from '@angular/core';
import {TodoServiceService} from './todo-service.service'
import {Todo } from "./todo.model" 
import {Router} from '@angular/router'

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
    date:"18/2/22",
    done:"yes",
    description:"Example description" 
  }];

  constructor(public service:TodoServiceService, private router: Router){
    this.listShow = service.getLista
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
