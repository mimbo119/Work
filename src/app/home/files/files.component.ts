import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material'
import { FilesAddComponent } from '../files-add/files-add.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  array = [
    { id : 1 , name : 'Yellow'},
    { id : 2 , name : 'Blue'},
    { id : 3 , name : 'Yellow'},
    { id : 4 , name : 'Blue'}
  ];

  breakpoint = 2;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }

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

}
