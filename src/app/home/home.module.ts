import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilesComponent } from './files/files.component';
import { FilesAddComponent } from './files-add/files-add.component';
import { MaterialModule } from '../material/material.module';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    FilesComponent,
    FilesAddComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  entryComponents : [FilesAddComponent],
  providers : [BooksComponent]
})
export class HomeModule { }
