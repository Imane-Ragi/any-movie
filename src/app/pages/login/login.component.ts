import { Component, OnInit } from '@angular/core';
import { AuthResponse } from 'src/app/models/auth-response';
import { UserCredentials } from 'src/app/models/user-credentials';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private authService : AuthService, private storage : LocalStorageService){}
  
  userAuth : UserCredentials = {
    email : "",
    password : ""
  }

  signIn()
  {
    const {email , password } =  this.userAuth;
    this.authService.login(email,password).subscribe(({token})=> this.storage.setToken(token));
    
  }

}
