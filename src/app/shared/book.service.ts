import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firebase : AngularFireDatabase) { }
  filteItem;
  bookList : AngularFireList<any>;

  formBook : FormGroup = new FormGroup({
    $key: new FormControl(null),
    bookName : new FormControl('', [Validators.required]),
    bookWriter : new FormControl('', [Validators.required]),
    bookDes : new FormControl(''),
    fileId : new FormControl(null)
  });

  initializeForm(){
    this.formBook.setValue({
      $key : null,
      bookName : '',
      bookWriter : '',
      bookDes : '',
      fileId : ''
    });
  }

  getBook(){
    this.bookList = this.firebase.list('books');
    return this.bookList.snapshotChanges();
  }

  insertBook(books){
    books.fileId = this.filteItem;
    this.bookList.push({
      bookName : books.bookName,
      bookWriter : books.bookWriter,
      bookDes : books.bookDes,
      fileId : books.fileId,
    })

  }
  updateBook(books){
    this.bookList.update(books.$key,{
      bookName : books.bookName,
      bookWriter : books.bookWriter,
      bookDes : books.bookDes
    });
  }

  deleteBook($key : string){
    this.bookList.remove($key);
  }

  populate(row){
    this.formBook.setValue(row);
  }
  
  deleteFile($key : string){
    this.bookList.remove($key);
    return this.bookList.snapshotChanges();
  }

  getFileItem(file){
    this.filteItem = file;
  }
}
