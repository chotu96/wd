import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html'
})

export class App {

  regUser = "";
  regPass = "";

  logUser = "";
  logPass = "";

  user = "";
  pass = "";

  message = "";

  register(){

    this.user = this.regUser;
    this.pass = this.regPass;

    this.message = "Registration Successful";
  }

  login(){

    if(this.logUser == this.user &&
       this.logPass == this.pass){

      this.message = "Login Successful";
    }
    else{

      this.message = "Invalid Login";
    }

  }

}