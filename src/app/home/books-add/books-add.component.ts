import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {
  @Input() fileItem: string;

  constructor(private service : BookService,
    private dialogRef : MatDialogRef<BooksAddComponent>) { }

  ngOnInit() {
    this.service.getBook();
  }
  onClear(){
    this.service.formBook.reset();
    this.service.initializeForm();
  }
  getFile(fileId){
    console.log("add", fileId)
  };
  onSubmit(){
    if(this.service.formBook.valid){
      if (!this.service.formBook.get('$key').value){
        this.service.insertBook(this.service.formBook.value);
        this.onClose();
      }
      else{
      this.service.updateBook(this.service.formBook.value);
      this.onClose();
      }
    }
  }

  onClose(){
    this.service.formBook.reset();
    this.service.initializeForm();
    this.dialogRef.close();
  }

}
