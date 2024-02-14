import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Route,
  UrlSegment,
  RouterStateSnapshot,
  Router, CanMatchFn, CanActivateFn
} from '@angular/router';
import {map, Observable, switchMap, tap} from 'rxjs';

import {AuthService} from '../services/auth.service';

const checkAuthStatus = (): Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap(isAuthenticated => console.log('Authenticated:', isAuthenticated)),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          router.navigate(['/auth/login']);
        }
      }),
    )
}

export const canMatchGuard: CanMatchFn = (
  router: Route,
  state: UrlSegment[],
) => {
  return checkAuthStatus();
}

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return checkAuthStatus();
}
