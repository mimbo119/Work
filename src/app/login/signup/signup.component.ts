import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/shared/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private service : SignupService) { }

  // private service : SignupService , public authService : AuthService
  // errorMessage;
  // successMessage;


  // tryRegister(value){
  //   this.authService.doRegister(value)
  //   .then(res => {
  //     console.log(res);
  //     this.errorMessage = "";
  //     this.successMessage = "Your account has been created";
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //     this.successMessage = "";
  //   })
  // }

  ngOnInit() {
    
  }

}
