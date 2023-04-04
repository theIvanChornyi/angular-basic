import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateChildFn,
    CanActivateFn,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.servise';

export const canActivateGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return inject(AuthService).isAuthentificated();
};
export const canActivateChildrenGuard: CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return canActivateGuard(route, state);
};
