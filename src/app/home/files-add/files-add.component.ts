import { Component, OnInit } from '@angular/core';
import { FilesAddService } from 'src/app/shared/files-add.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-files-add',
  templateUrl: './files-add.component.html',
  styleUrls: ['./files-add.component.css']
})
export class FilesAddComponent implements OnInit {

  constructor(private service : FilesAddService,
    private dialogRef : MatDialogRef<FilesAddComponent>) { }

  ngOnInit() {
    this.service.getFile();
  }
  onClear(){
    this.service.formFile.reset();
    this.service.initializeForm();
  }
  onSubmit(){
    if(this.service.formFile.valid){
      if (!this.service.formFile.get('$key').value){
        this.service.insertFile(this.service.formFile.value);
        this.onClose();
      }
      else{
      this.service.updateFile(this.service.formFile.value);
      this.onClose();
      }
    }
  }

  onClose(){
    this.service.formFile.reset();
    this.service.initializeForm();
    this.dialogRef.close();
  }

}
