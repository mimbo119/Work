import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class FilesAddService {

  constructor(private firebase : AngularFireDatabase) { }
  fileList : AngularFireList<any>;

  formFile : FormGroup = new FormGroup({
    $key: new FormControl(null),
    fileName : new FormControl('', [Validators.required]),
    fileType : new FormControl('', [Validators.required]),
    fileDes : new FormControl('')
  });

  initializeForm(){
    this.formFile.setValue({
      $key : null,
      fileName : '',
      fileType : '',
      fileDes : ''
    });
  }

  getFile(){
    this.fileList = this.firebase.list('files');
    return this.fileList.snapshotChanges();
  }

  insertFile(files){
    this.fileList.push({
      fileName : files.fileName,
      fileType : files.fileType,
      fileDes : files.fileDes
    })
  }
  updateFile(files){
    this.fileList.update(files.$key,{
      fileName : files.fileName,
      fileType : files.fileType,
      fileDes : files.fileDes
    });
  }

  deleteFile($key : string){
    this.fileList.remove($key);
  }
}
