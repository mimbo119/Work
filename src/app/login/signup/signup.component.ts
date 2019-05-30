import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/shared/signup.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private service : SignupService, private authService : AuthService, private dialogRef : MatDialogRef<SignupComponent>) { }

  errorMessage;
  successMessage;


  tryRegister(value){
    value.userName = value.userName + "@mail.com";
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
      alert(this.successMessage);
      this.onClose()
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
      alert("Error Occured" + this.errorMessage);
      this.onClose()
    })
  }

  onClose(){
    this.service.formUser.reset();
    this.service.initializeForm();
    this.dialogRef.close();
  }



  ngOnInit() {
    
  }

}
