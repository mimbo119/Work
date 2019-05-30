import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, MatTableDataSource } from '@angular/material'
import { FilesAddComponent } from '../files-add/files-add.component';
import { BooksComponent } from '../books/books.component';
import { FilesAddService } from 'src/app/shared/files-add.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private dialog : MatDialog,
              private books : BooksComponent,
              private service : FilesAddService,
              private authService : AuthService) { }
  
  listData : MatTableDataSource<any>;
  fileShow = [];
  breakpoint = 2;
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  onCreateFiles(){
    // this.service.initializeFormDept();
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "60%";
    dialogConfig.minWidth = "30%";
    dialogConfig.minHeight = "50%";
    this.dialog.open(FilesAddComponent, dialogConfig);
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    this.service.getFile().subscribe(
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
    this.listData = new MatTableDataSource(array);
    this.fileShow = this.listData.filteredData;  
    })
  }

  onEdit(row){
    this.service.populate(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width= "70%";
    dialogConfig.height= "70%";
    dialogConfig.minWidth = "25%";
    this.dialog.open(FilesAddComponent, dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure?')){
    this.service.deleteFile($key);
    }
  }

}
