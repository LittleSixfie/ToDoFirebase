import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Router } from '@angular/router';
import { NotFoundError } from 'rxjs';

import { addDoc, updateDoc, getDocs, deleteDoc } from '@firebase/firestore';
import {
  Firestore,
  collectionData,
  collection,
  query,
} from '@angular/fire/firestore';
import { doc, getDoc, Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  list: Todo[] = [
    {
      id: 1,
      name: 'Nombre Tarea',
      date2: new Date(2022, 2, 2),
      done: true,
      description: 'Esto es una prueba',
    },
  ];

  id: number = 0;
  firestore: Firestore;

  constructor(private router: Router, firestore: Firestore) {
    this.firestore = firestore;
  }

  //
  getTodoDoc(int:number): Promise<any> {
    const dbInstance = doc(this.firestore, ('todo/' + int));
    return getDoc(dbInstance);
  }

  async createTodoDoc(todo: Todo) {
    const res = collection(this.firestore, 'todo');
    const id = addDoc(res, JSON.parse(JSON.stringify(todo)));
    let aux: string = '';
    await id.then(function (data) {
      data.id;
      aux = data.id;
    });

    updateDoc(doc(this.firestore, 'todo/' + aux), {
      id: aux,
      name: todo.name,
      date2: todo.date2,
      done: todo.done,
      description: todo.description,
    });
  }

  async getTodos(): Promise<Todo[]> {
    const list: Todo[] = [];
    const res = collection(this.firestore, 'todo');
    const q = query(collection(this.firestore, 'todo'));
    const algo = await getDocs(q);
    
    //Locura para pasar a date otra vez
    algo.forEach((doc) => {
      const data = doc.data() as any;
      Object.keys(data).filter(key => data[key] instanceof Timestamp)
                        .forEach(key => data[key] = data[key].toDate())
      
      list.push(data as Todo);
    });
    return list;
  }

  deleteDoc(id:number){
    const dbInstance = doc(this.firestore, ('todo/' + id));
    deleteDoc(dbInstance);
    this.router.navigate([""])
  }

  updateDoc(id:number, objetoUpdate:Todo){
    updateDoc(doc(this.firestore, 'todo/' + id), {
      id: id,
      name: objetoUpdate.name,
      date2: objetoUpdate.date2,
      done: objetoUpdate.done,
      description: objetoUpdate.description,
    });
    
  }

  //===============================================================
  /*
  get getLista(): Todo[] {
    return this.list;
  }

  addTodo(tarea: Todo) {
    this.id++;
    tarea.id = this.id;
    this.list.push(tarea);
    this.router.navigate(['']);
  }

  getById(searchId: number): Todo {
    let res = this.list.find((searchObj) => searchObj.id == searchId);
    if (res != undefined) {
      return res;
    }
    let failed: Todo = {
      id: 0,
      name: 'NOT FOUND',
    };
    return failed;
  }

  deleteById(searchId: number) {

    let res = this.list.find((searchObj) => searchObj.id == searchId);
    if (res != undefined) {
      this.list.splice(this.list.indexOf(res, 0), 1);
    }

  }

  updateById(searchId: number, updatedTodo: Todo) {
    let res = this.list.find((searchObj) => searchObj.id == searchId);
    if (res != undefined) {
      let index = this.list.indexOf(res, 0);
      this.list[index] = updatedTodo;
    }
  }

  */
}
