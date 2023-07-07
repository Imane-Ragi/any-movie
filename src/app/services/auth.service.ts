import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


API_URL = 'http://localhost:5200/api/v1/users/'

  constructor(private http: HttpClient) { }

  login(email:string , pass: string) : Observable<AuthResponse>
  {
  
     
    return  this.http.post<AuthResponse>(`${this.API_URL}login`,{ email, 'password' : pass});
  }
}
