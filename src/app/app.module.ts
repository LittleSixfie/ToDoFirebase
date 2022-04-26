import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card'; 

import { environment } from 'src/environments/environment';
import { provideFirestore,getFirestore,connectFirestoreEmulator  } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp, getApp } from '@angular/fire/app';

import {MatSelectModule} from '@angular/material/select'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoReadComponent } from './todo-read/todo-read.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { YesNoPipe } from './yes-no.pipe';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TodoReadComponent,
    TodoCreateComponent,
    TodoDeleteComponent,
    TodoUpdateComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    MatSelectModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
