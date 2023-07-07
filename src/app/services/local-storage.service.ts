import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly tokenName = 'token'

  constructor() { }

  getToken(){

     return localStorage.getItem(this.tokenName)
  }

  setToken(value : string)
  {
    localStorage.setItem(this.tokenName,value)
  }

  clearLocalStorage()
  {
    localStorage.clear
  }

  removeToken()
  {
    localStorage.removeItem(this.tokenName)
  }
}
