import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent} from "./app.component"
import { TodoReadComponent } from './todo-read/todo-read.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [
  {path:'read/:id', component: TodoReadComponent},
  {path:'create', component: TodoCreateComponent},
  {path:'update/:id', component: TodoUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TodoCreateComponent,
  TodoDeleteComponent,
  TodoReadComponent,
  TodoUpdateComponent]

