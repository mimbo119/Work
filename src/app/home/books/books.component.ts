import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
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
  
  listData : MatTableDataSource<any>;
  bookShow = [];
  bookArray = [];
  displayedColumns : string[] = ['bookName', 'bookWriter', 'bookDes', 'actions' ];
  @ViewChild(MatSort) sort2 : MatSort;
  @ViewChild(MatPaginator) pages : MatPaginator;
  
  arrayBook = [];

  bookItem(file){
    for (var i=0; i<=this.arrayBook.length; i++){
      if(this.arrayBook[i].fileId == file){
        this.bookArray.push(this.arrayBook[i]);
      }
    }
  }
  onCreateBooks(fileItem){
    console.log(fileItem)
    this.service.getFileItem(fileItem);
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
    
    //console.log(this.fileItem);
    this.service.getBook().subscribe(
      list =>{
        let array = list.map(item => {
          return {
            $key : item.key,
            ...item.payload.val()           
          };
        // });
        
        
        // this.listData.sort = this.sort2;
        // this.listData.paginator = this.pages;
      }
      
    );
    this.arrayBook = array;  
    this.listData = new MatTableDataSource(array);
    this.bookShow = this.listData.filteredData;  
    this.bookItem(this.fileItem);
  });

    
  }

}
