import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


API_URL = 'http://localhost:5200/api/v1/users/'

  constructor(private http: HttpClient) { }

  login(email:string , pass: string)
  {
     
    return  this.http.post(`${this.API_URL}/login`,{ email, 'password' : pass});
  }
}
