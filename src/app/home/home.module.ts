import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { environment } from "../../environments/environment";

import { HomeRoutingModule } from './home-routing.module';
import { FilesComponent } from './files/files.component';
import { FilesAddComponent } from './files-add/files-add.component';
import { MaterialModule } from '../material/material.module';
import { BooksComponent } from './books/books.component';
import { FilesAddService } from '../shared/files-add.service';
import { BooksAddComponent } from './books-add/books-add.component';
import { BookService } from '../shared/book.service';

@NgModule({
  declarations: [
    FilesComponent,
    FilesAddComponent,
    BooksComponent,
    BooksAddComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  
  providers : [BooksComponent, FilesAddService, BookService],
  entryComponents : [FilesAddComponent, BooksAddComponent]
})
export class HomeModule { }
