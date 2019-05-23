import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dialog: MatDialog, private service : LoginService) { }

  logIn(){
    console.log("ok in component");
    this.service.get();

  }

  // logIn2(){
  //   console.log("ok in component");
  //   this.auth.get();

  // }

  signUp() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true ;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "60%";
    dialogConfig.minWidth = "30%";
    dialogConfig.minHeight = "50%";
    this.dialog.open(SignupComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
