import { Component, OnInit, Input } from '@angular/core';
import { MatDialogConfig, MatDialog, MatTableDataSource } from '@angular/material';
import { BooksAddComponent } from '../books-add/books-add.component';
import { BookService } from 'src/app/shared/book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() fileItem: string;

  constructor(private service : BookService,
              private dialog : MatDialog) { }
  
  bookArray = [];
  
  array = [
    { id: "1", name: 'X' },
    { id: "2", name: 'YY' },
    { id: "2", name: 'Y' },
    { id: "3", name: 'Z' }
  ];

  bookItem(file){
    for (var i=0; i<=this.array.length; i++){
      if(this.array[i].id == file){
        this.bookArray.push(this.array[i]);
      }
    }
  }
  onCreateBooks(fileItem){
    console.log(fileItem)
    // this.service.initializeFormDept();
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "60%";
    dialogConfig.minWidth = "30%";
    dialogConfig.minHeight = "50%";
    this.dialog.open(BooksAddComponent, dialogConfig);
  }


  ngOnInit() {
    // this.bookItem(this.fileItem);
  }

}
