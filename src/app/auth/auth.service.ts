import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  private loggedStatus = false;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.setLogin(true);
        localStorage.setItem('user', JSON.stringify(this.user));
        
      } else {
        this.setLogin(false)
        localStorage.setItem('user', null);
        
      }
    })
   }

   async  login(email:  string, password:  string) {
    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['/files']);
    } catch (e) {
        alert("Error!"  +  e.message);

    }
    }

    async logout(){
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['']);
      alert("Logging Out!")
  }

  setLogin(value: boolean){
    this.loggedStatus = value;
  }

  isLoggedIn(){
    // const  user  =  JSON.parse(localStorage.getItem('user'));
    // return  user  !==  null;
    
    return this.loggedStatus;
}

doRegister(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.userName, value.pass)
    .then(res => {
      resolve(res);
    }, err => reject(err))
  })
}

}
