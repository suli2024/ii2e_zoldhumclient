import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthapiService } from './authapi.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authapiService =  inject(AuthapiService);
  if(!authapiService.isLoggedIn()) {
    return false;
  }

  return true;
};
