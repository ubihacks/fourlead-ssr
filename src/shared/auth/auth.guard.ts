import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
} from '@angular/router';
import { AppConfigService } from '../AppConfigService';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
      private router: Router,
      private appSession: AppConfigService
      ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if ((url === '/home') && (this.appSession.userId)) {
            this.router.navigate(['/user/user-main']);
            return false;
        }
        if ((url === '/account/login') && (this.appSession.userId)) {
            this.router.navigate(['/user/user-main']);
            return false;
        }
        if (!this.appSession.userId && (url !== '/home')) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    }
}
