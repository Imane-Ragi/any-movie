import { Component, OnInit } from '@angular/core';
import { UserCredentials } from 'src/app/models/user-credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private authService : AuthService){}
  
  userAuth : UserCredentials = {
    email : "",
    password : ""
  }

  signIn()
  {
    const {email , password } =  this.userAuth;
    this.authService.login(email,password).subscribe(res => console.log(res));
    
  }

}
