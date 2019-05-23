import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  formUser : FormGroup = new FormGroup({
    userName : new FormControl('', [Validators.required]),
    pass : new FormControl('', [Validators.required])
  });

  initializeForm(){
    this.formUser.setValue({
      userName : '',
      pass : ''
    });
  }

 
}
