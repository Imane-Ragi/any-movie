import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';  

export const authGuard: CanActivateFn = (route, state) => {
  
  const storageService  = inject(LocalStorageService)  
  const router  = inject(Router)  
  if(!storageService.getToken())
  {
    router.navigate(['/login'])
    return false

  }

  return true

};
