import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupComponent } from './login/signup/signup.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent]
})
export class AppModule { }
